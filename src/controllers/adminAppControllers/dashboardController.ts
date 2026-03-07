import { Request, Response } from "express";
import { Pacient } from "../../database/schemas/Pacients";
import { Exam } from "../../database/schemas/Exam";
import { Lab } from "../../database/schemas/Labs";

export const AdminAppDashboardController = {
  getStats: async (request: Request, response: Response): Promise<Response> => {
    try {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);

      const [totalPatients, pendingExams, totalLabs, todayPatients, todayExamsCreated, todayExamsUpdated, recentPatients, recentExams] =
        await Promise.all([
          Pacient.countDocuments(),
          Pacient.countDocuments({ $or: [{ allowedDate: null }, { allowedDate: { $exists: false } }] }),
          Lab.countDocuments(),
          Pacient.countDocuments({ createdAt: { $gte: startOfToday } }),
          Exam.countDocuments({ createdAt: { $gte: startOfToday } }),
          Exam.countDocuments({ updatedAt: { $gte: startOfToday } }),
          Pacient.find().sort({ updatedAt: -1 }).limit(5).lean(),
          Exam.find().sort({ updatedAt: -1 }).limit(5).lean(),
        ]);

      const todayActivity = todayPatients + todayExamsCreated + todayExamsUpdated;

      const recentActivity: Array<{
        type: "patient_created" | "exam_created" | "exam_updated";
        entityId: string;
        entityName: string;
        timestamp: string;
      }> = [];

      recentPatients.forEach((p) => {
        if (p.createdAt) {
          recentActivity.push({
            type: "patient_created",
            entityId: String(p._id),
            entityName: (p.fullName as string) || "Paciente",
            timestamp: new Date(p.createdAt).toISOString(),
          });
        }
      });

      recentExams.forEach((e) => {
        const createdTime = e.createdAt ? new Date(e.createdAt).getTime() : 0;
        const updatedTime = e.updatedAt ? new Date(e.updatedAt).getTime() : 0;
        if (e.createdAt && (!e.updatedAt || createdTime >= updatedTime)) {
          recentActivity.push({
            type: "exam_created",
            entityId: String(e._id),
            entityName: `Exame ${String(e.patient_id || e._id).slice(-6)}`,
            timestamp: new Date(e.createdAt).toISOString(),
          });
        } else if (e.updatedAt) {
          recentActivity.push({
            type: "exam_updated",
            entityId: String(e._id),
            entityName: `Exame ${String(e.patient_id || e._id).slice(-6)}`,
            timestamp: new Date(e.updatedAt).toISOString(),
          });
        }
      });

      recentActivity.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      recentActivity.splice(10);

      return response.json({
        totalPatients,
        pendingExams,
        totalLabs,
        todayActivity,
        recentActivity,
      });
    } catch (error) {
      console.error("Dashboard stats error:", error);
      return response.status(500).json({
        error: "Erro ao carregar estatísticas do dashboard",
      });
    }
  },
};
