import { IAsCard } from "@/components/ui/AsCard";
import { ISolutionCard } from "@/components/ui/SolutionCard";
import { Earth, Gem, Leaf, Store } from "lucide-react";

import React from 'react'

const DataSource = () => {

    const DataSolutionSection: ISolutionCard[] = [
        {
            title: 'Pedidos Comunitarios',
            description: 'Únete a pedidos grupales con personas en tu edificio.',
            icon: <Store />,
        },
        {
            title: 'Impacto Ambiental Positivo',
            description: 'Menos repartidores = menor huella de carbono.',
            icon: <Leaf />,
        },
        {
            title: 'Cashback',
            description: 'Gana hasta un 30% en cada pedido grupal.',
            icon: <Gem />,
        },
        {
            title: 'Conecta con tu Comunidad',
            description: 'Haz nuevos amigos mientras ahorras.',
            icon: <Earth />,
        },
    ];

    const DataAsSection: IAsCard[] = [
        {
            row: 'Row1',
            title: 'Busca',
            description: 'Encuentra pedidos grupales en tu dirección desde la app.',
            number: '01'
        },
        {
            row: 'Row2',
            title: 'Únete o Crea',
            description: 'Únete a un grupo existente o crea uno nuevo.',
            number: '02'
        },
        {
            row: 'Row1',
            title: 'Paga y Recibe Cashback',
            description: 'Ahorra más cuando más personas se unan.',
            number: '03'
        },
        {
            row: 'none',
            title: 'Disfruta',
            description: 'Recibe tu comida en óptimas condiciones, rápida y caliente.',
            number: '04'
        },
    ]

    return{
        DataSolutionSection,
        DataAsSection
    }
}

export default DataSource