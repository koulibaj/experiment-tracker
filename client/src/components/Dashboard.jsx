import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

export default function Dashboard({ experiments }) {

  const completed = experiments.filter(e => e.duration);

  const data = completed.map(e => ({
    name: e.name,
    actual: e.duration,
    estimated: e.estimatedTime
  }));

  return (
    <div>
      <h2>📊 Analytics</h2>

      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="actual" />
        <Line type="monotone" dataKey="estimated" />
      </LineChart>
    </div>
  );
}