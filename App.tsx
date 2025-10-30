import React, { useState, useCallback } from 'react';
import { PILLARS_DATA } from './constants';
import { Pillar } from './types';
import GridCell from './components/GridCell';
import DetailGrid from './components/DetailGrid';

const App: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

  const handlePillarClick = useCallback((pillar: Pillar) => {
    setSelectedPillar(pillar);
  }, []);
  
  const handleBack = useCallback(() => {
    setSelectedPillar(null);
  }, []);

  // Arrange pillars for a 3x3 grid with the core goal (id: 0) in the center
  const gridPillars = [
    PILLARS_DATA.find(p => p.id === 1)!, PILLARS_DATA.find(p => p.id === 2)!, PILLARS_DATA.find(p => p.id === 3)!,
    PILLARS_DATA.find(p => p.id === 8)!, PILLARS_DATA.find(p => p.id === 0)!, PILLARS_DATA.find(p => p.id === 4)!,
    PILLARS_DATA.find(p => p.id === 7)!, PILLARS_DATA.find(p => p.id === 6)!, PILLARS_DATA.find(p => p.id === 5)!
  ];

  if (selectedPillar) {
    return <DetailGrid pillar={selectedPillar} onBack={handleBack} />;
  }
  
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text-light tracking-tight">
          OW64 个人成长蓝图
        </h1>
        <p className="mt-2 text-lg text-brand-text-dark">
          践行复利人生：一个九宫格可视化系统
        </p>
      </header>
      
      <main className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 aspect-square">
          {gridPillars.map((pillar) => (
            <GridCell
              key={pillar.id}
              pillar={pillar}
              isCenter={pillar.id === 0}
              onClick={() => handlePillarClick(pillar)}
            />
          ))}
        </div>
      </main>

      <footer className="mt-8 text-center text-brand-text-dark text-sm">
          <p>点击宫格查看每个支柱的详细目标和行动列表。</p>
      </footer>
    </div>
  );
};

export default App;
