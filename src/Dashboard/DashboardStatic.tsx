import React, { useEffect, useRef, useState } from "react";
import Style from "../style/dashboardstatic.module.scss";
import Chart, { ChartDataset } from "chart.js/auto";

const DashboardStatic = () => {
  const chartRef: any = useRef(null);
  const chartInstance: any = useRef(null);
  const [showBlue, setShowBlue] = useState(true);
  const [showGreen, setShowGreen] = useState(true);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const datasets: ChartDataset<"line", number[]>[] = [];

    if (showBlue) {
      datasets.push({
        label: "Booking",
        data: [10, 30, 20, 50, 40, 80, 60, 90],
        borderColor: "lightblue",
        backgroundColor: "rgba(30, 144, 255, 0.4)",
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: "white",
        pointRadius: 5,
      });
    }

    if (showGreen) {
      datasets.push({
        label: "Listings View",
        data: [20, 25, 35, 30, 45, 60, 80, 70],
        borderColor: "lightgreen",
        backgroundColor: "rgba(50, 205, 50, 0.4)",
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: "white",
        pointRadius: 5,
      });
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          x: {
            grid: {
              display: true,
            },
          },
          y: {
            grid: {
              display: true,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [showBlue, showGreen]);
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <h2>Your statics</h2>
      </div>
      <div className={Style.content}>
        <div className={Style.data}>
          <h2>1054</h2>
          <h3>Listing Views</h3>
        </div>
        <div className={Style.data}>
          <h2>2557</h2>
          <h3>Total Reviews</h3>
        </div>
        <div className={Style.data}>
          <h2>125</h2>
          <h3>Bookings</h3>
        </div>
      </div>
      <div className={Style.mainbox}>
        <div className={Style.divide}>
          <div className={Style.selectButton}>
            <h2>
              Week <i className="fa-solid fa-angle-down"></i>
            </h2>
          </div>
          <div className={Style.listingbutton}>
            <button onClick={() => setShowGreen((prev) => !prev)}>
              Listings View {showGreen ? "✅" : "❌"}
            </button>
            <button onClick={() => setShowBlue((prev) => !prev)}>
              Booking {showBlue ? "✅" : "❌"}
            </button>
          </div>
        </div>
        <div className={Style.chartContainer}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
      <div className={Style.message}>
        <div className={Style.messageTitle}>
          <h2>Recent Activities</h2>
        </div>
        <div className={Style.leftMessage}>
          <h2>
            <i className="fa-solid fa-check"></i>
            <span>
              Your listing <b>Park Central</b> has been approved!
            </span>
          </h2>
          <h3>
            28 may 2020 <span>X</span>
          </h3>
        </div>
        <div className={Style.leftMessage}>
          <h2>
            <i className="fa-solid fa-check"></i>
            <span>
              Your listing <b>Park Central</b> has been approved!
            </span>
          </h2>
          <h3>
            28 may 2020 <span>X</span>
          </h3>
        </div>
        <div className={Style.leftMessage}>
          <h2>
            <i className="fa-solid fa-check"></i>
            <span>
              Your listing <b>Park Central</b> has been approved!
            </span>
          </h2>
          <h3>
            28 may 2020 <span>X</span>
          </h3>
        </div>
        <div className={Style.leftMessage}>
          <h2>
            <i className="fa-solid fa-check"></i>
            <span>
              Your listing <b>Park Central</b> has been approved!
            </span>
          </h2>
          <h3>
            28 may 2020 <span>X</span>
          </h3>
        </div>
        <div className={Style.leftMessage}>
          <h2>
            <i className="fa-solid fa-check"></i>
            <span>
              Your listing <b>Park Central</b> has been approved!
            </span>
          </h2>
          <h3>
            28 may 2020 <span>X</span>
          </h3>
        </div>
        <div className={Style.leftMessage}>
          <h2>
            <i className="fa-solid fa-check"></i>
            <span>
              Your listing <b>Park Central</b> has been approved!
            </span>
          </h2>
          <h3>
            28 may 2020 <span>X</span>
          </h3>
        </div>
        <div className={Style.leftMessage}>
          <h2>
            <i className="fa-solid fa-check"></i>
            <span>
              Your listing <b>Park Central</b> has been approved!
            </span>
          </h2>
          <h3>
            28 may 2020 <span>X</span>
          </h3>
        </div>
        <div className={Style.leftMessage}>
          <h2>
            <i className="fa-solid fa-check"></i>
            <span>
              Your listing <b>Park Central</b> has been approved!
            </span>
          </h2>
          <h3>
            28 may 2020 <span>X</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatic;
