import User from "../model/user.js";
import OverAllStat from "../model/overall-stat.js";
import Transaction from "../model/transaction.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getDashboardStat = async (req, res) => {
  try {
    const currentMonth = "November";
    const currentYear = "2021";
    const currentDay = "2021-11-15";
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createOn: -1 });

    const overallStat = await OverAllStat.find({ year: currentYear });
    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });
    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
