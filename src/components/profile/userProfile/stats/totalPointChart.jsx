import { PieChart, Pie, Cell } from 'recharts';

export const TotalPointChart = () => {
  const data02 = [
    { name: 'A1', value: 50 },
    { name: 'A2', value: 30 },
    { name: 'B1', value: 20 },
  ];
  const COLORS = ['#41a0fa', '#f3d28d', '#f47e10'];
  return (
    <>
      <p className="text-[17px] text-white px-5" style={{ lineHeight: '20.57px', fontWeight: 700 }}>
        My Total Points : 1280
      </p>
      <div className="flex gap-5 flex-wrap items-center">
        <PieChart width={200} height={400}>
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#8884d8" label>
            {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-center gap-2 my-2 text-[16px]" style={{ lineHeight: '19.75px', fontWeight: 400 }}>
            <div className="w-4 h-4 bg-[#41a0fa] rounded-full"></div>
            Tokens
          </div>
          <div className="flex my-2 items-center gap-2 text-[16px]" style={{ lineHeight: '19.75px', fontWeight: 400 }}>
            <div className="w-4 h-4 bg-[#f3d28d] rounded-full"></div>
            Engagement
          </div>
          <div className="flex my-2 items-center gap-2 text-[16px]" style={{ lineHeight: '19.75px', fontWeight: 400 }}>
            <div className="w-4 h-4 bg-[#f47e10] rounded-full"></div>
            Events
          </div>
        </div>
      </div>
    </>
  );
};
