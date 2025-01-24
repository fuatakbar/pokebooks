import React from "react";

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface StatsProps {
  stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pokemon Stats</h2>
      <div className="space-y-4">
        {stats.map((stat) => {
          const percentage = (stat.base_stat / 255) * 100;

          return (
            <div className="capitalize" key={stat.stat.name}>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </div>
              <div className="relative w-full h-4 bg-gray-200 rounded">
                <div
                  className={`absolute top-0 left-0 h-full bg-blue-500 rounded`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="block text-right text-sm">
                {percentage.toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
