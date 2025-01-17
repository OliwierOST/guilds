import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { Box } from "@mui/material"
import { ChartTitle } from "./Title"
import { data } from "./data"
import { monthTicks } from "./ticks"
import { relative } from "path"

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface BountiesGraphProps {
  period: "month" | "year" | "week"
}

export function BountiesGraph({ period }: BountiesGraphProps) {
  const options = {
    responsive: true,
    radius: 0,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          callback: (value) => {
            const monthTick = monthTicks.find(
              (tick) => tick.middleDay === value
            )
            return monthTick?.month
          },
          font: {
            size: 12,
            family: "Plus Jakarta Sans",
          },
        },
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Month",
          font: {
            size: 14,
            family: "Plus Jakarta Sans",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "£ / XP",
          font: {
            size: 14,
            family: "Plus Jakarta Sans",
          },
        },
        ticks: {
          font: {
            size: 12,
            family: "Plus Jakarta Sans",
          },
        },
      },
    },
  }

  return (
    <Box
      p={3}
      sx={{
        border: "1px solid",
        borderColor: (theme) => theme.palette.grey[200],
        borderRadius: "0.5rem",
        position: "relative",
        height: "20rem",
        pb: "6rem",
        boxShadow: "0px 1px 3px 0px #1018281A",
      }}
    >
      <ChartTitle />
      <Line data={data} options={options} />
    </Box>
  )
}
