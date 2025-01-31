import { PieChart, Pie, Cell } from 'recharts';

export const MyCausesChart = () => {
  const data02 = [
    { name: 'A1', value: 180 },
    { name: 'A2', value: 40 },
    { name: 'B1', value: 70 },
    { name: 'B2', value: 40 },
    { name: 'B3', value: 130 },
  ];
  const COLORS = ['#40AFBF', '#663DB8', '#f47e10', '#57C17B', '#9E3533'];
  return (
    <>
      <p className="text-[17px] text-white" style={{ lineHeight: '20.57px', fontWeight: 700 }}>
        My Causes
      </p>
      <div className="flex gap-5 flex-wrap items-center px-2">
        <PieChart width={220} height={400}>
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#8884d8" label>
            {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        <div className="flex flex-col gap-4 mt-2 text-white">
          <div className="flex items-center gap-2 my-2 text-[16px]" style={{ lineHeight: '19.75px', fontWeight: 400 }}>
            <div className="w-4 h-4 bg-[#40AFBF] rounded-full"></div>
            Classic
          </div>
          <div className="flex my-2 items-center gap-2 text-[16px]" style={{ lineHeight: '19.75px', fontWeight: 400 }}>
            <div className="w-4 h-4 bg-[#663DB8] rounded-full"></div>
            Climate Change
          </div>
          <div className="flex items-center gap-2 text-[16px] my-2" style={{ lineHeight: '19.75px', fontWeight: 400 }}>
            <div className="w-4 h-4 bg-[#f47e10] rounded-full"></div>
            Education
          </div>
          <div className="flex my-2 items-center gap-2 text-[16px]" style={{ lineHeight: '19.75px', fontWeight: 400 }}>
            <div className="w-4 h-4 bg-[#57C17B] rounded-full"></div>
            Equality
          </div>
          <div className="flex my-2 items-center gap-2 text-[16px]" style={{ lineHeight: '19.75px', fontWeight: 400 }}>
            <div className="w-4 h-4 bg-[#9E3533] rounded-full"></div>
            Gun Control
          </div>
        </div>
      </div>
    </>
  );
};
