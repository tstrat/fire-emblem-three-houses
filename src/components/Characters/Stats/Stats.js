import React from 'react';
import './stats.scss';

let stats = ['hp','str','dex','mag','spd','luck','def','res','cha']

function Stats({ growth_rate, base, max }) {
    return (
        <table className='character__details-stats'>
            <thead>
                <tr>
                    <th className='w'>Stats</th>
                    {stats.map((stat, i) => <th key={i}>{stat.toUpperCase()}</th>)}
                </tr>
            </thead>
            <tbody>
                <TableRow rowTitle='Growth Rate' rowObject={growth_rate}  />
                <TableRow rowTitle='Base Stats' rowObject={base} />
                <TableRow rowTitle='Max Stats' rowObject={max} />
            </tbody>
        </table>
    );
};

export default Stats;

// Helper components
function TableRow({rowTitle, rowObject}) {
    return (
        <tr>
        <th>{rowTitle}</th>
        { stats.map(stat => <td key={`${rowTitle}-${stat}`}>{rowObject[stat]}</td>) }
        </tr>
    )

}
