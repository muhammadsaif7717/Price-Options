import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentsData = [
        { name: "Alice", mathMarks: 55, physicsMarks: 28, chemistryMarks: 92 },
        { name: "Bob", mathMarks: 78, physicsMarks: 80, chemistryMarks: 85 },
        { name: "Charlie", mathMarks: 92, physicsMarks: 88, chemistryMarks: 90 },
        { name: "David", mathMarks: 65, physicsMarks: 70, chemistryMarks: 75 },
        { name: "Eva", mathMarks: 89, physicsMarks: 85, chemistryMarks: 88 },
        { name: "Frank", mathMarks: 70, physicsMarks: 75, chemistryMarks: 72 },
        { name: "Grace", mathMarks: 95, physicsMarks: 92, chemistryMarks: 37 },
        { name: "Hannah", mathMarks: 83, physicsMarks: 78, chemistryMarks: 80 },
        { name: "Isaac", mathMarks: 77, physicsMarks: 22, chemistryMarks: 79 },
        { name: "Jack", mathMarks: 10, physicsMarks: 88, chemistryMarks: 92 }
      ];
      

    return (
        <div>
            <LChart width={500} height={400} data={studentsData}>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Line dataKey="mathMarks" stroke="black" />
            <Line dataKey="physicsMarks" stroke="tomato" />
            <Line dataKey="chemistryMarks" stroke="green" />
            </LChart>
        </div>
    );
};

export default LineChart;