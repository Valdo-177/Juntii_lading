import React from 'react';

export interface ISolutionCard {
    title: string;
    description: string;
    icon: React.ReactElement;
}

const SolutionCard = ({ data }: { data: ISolutionCard }) => {
    const { description, title, icon } = data;
    return (
        <div className="w-[265px] flex flex-col items-center p-3">
            <div className="bg-[#E4FFEE] p-5 mb-5 rounded-2xl w-[max-content] text-[#40975F]">
                {icon} {/* Renderiza el ícono aquí */}
            </div>
            <p className="font-bold">{title}</p>
            <p className="text-center text-sm">{description}</p>
        </div>
    );
};

export default SolutionCard;
