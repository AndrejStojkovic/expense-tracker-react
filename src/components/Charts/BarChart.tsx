import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    },
    title: {
      display: true,
      text: 'Income and Expense Bar Chart',
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 20000 })),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      },
      {
        label: 'Expenses',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 8000 })),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  )
}

export default BarChart;