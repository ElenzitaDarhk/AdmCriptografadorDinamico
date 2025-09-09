import Link from 'next/link';

export default function Configuracoes() {
  return (
           <div className="items-center justify-items-center p-10">
                <table className="table-auto border-collapse border border-gray-400 ...">
                <thead>
                    <tr>
                    <th className="p-2 border border-gray-300 ...">AppClient</th>
                    <th className="p-2 border border-gray-300 ...">Algorítmo</th>
                    <th className="p-2 border border-gray-300 ...">Chave</th>
                    <th className="p-2 border border-gray-300 ...">Data Inicio</th>
                    <th className="p-2 border border-gray-300 ...">Data Fim</th>
                    <th className="p-2 border border-gray-300 ...">Ativo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="p-2 border border-gray-300 ...">...</td>
                    <td className="p-2 border border-gray-300 ...">...</td>
                    <td className="p-2 border border-gray-300 ...">...</td>
                    <td className="p-2 border border-gray-300 ...">...</td>
                    <td className="p-2 border border-gray-300 ...">...</td>
                    <td className="p-2 border border-gray-300 ...">...</td>
                    </tr>
                </tbody>
                </table>
                <p>
                    <Link className='underline' href='/configuracoes/cadastro'>Novo</Link>
                    <Link className='underline' href='../'>Voltar</Link>
                </p>
            </div>
        );
}