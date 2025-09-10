import Link from 'next/link';
import { ConfigurationType } from "@/app/configuracoes/types";

export default async function Configuracoes() {

    const url: string = "https://68c0970e0b196b9ce1c4a941.mockapi.io/configuration";
    //const url: string = "http://localhost:8080/Configuration";

    try
    {
            const response = await fetch(url);

            if(response.status == 200)
            {
                const configs: ConfigurationType[] = await response.json();

                return (
                    <div className="mt-20 items-center justify-items-center">
                        <p>{configs.length} encontrados! </p>
                        <table className="table-auto border-collapse border border-gray-400 ...">
                        <thead>
                            <tr>
                            <th className="p-2 border border-gray-300 ...">ID</th>
                            <th className="p-2 border border-gray-300 ...">AppClient</th>
                            <th className="p-2 border border-gray-300 ...">Algorítmo</th>
                            <th className="p-2 border border-gray-300 ...">Chave</th>
                            <th className="p-2 border border-gray-300 ...">Data Inicio</th>
                            <th className="p-2 border border-gray-300 ...">Data Fim</th>
                            <th className="p-2 border border-gray-300 ...">Ativo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {configs.map((config) => (
                            <tr key={config.id}>
                                <td className="p-2 border border-gray-300 ...">
                                    {config.id}
                                </td>
                                <td className="p-2 border border-gray-300 ...">
                                    {config.appClient.name}
                                </td>
                                <td className="p-2 border border-gray-300 ...">
                                    {config.algorithm.name}
                                </td>
                                <td className="p-2 border border-gray-300 ...">
                                    {config.keyWord}
                                </td>
                                <td className="p-2 border border-gray-300 ...">
                                    {config.initialDate}
                                </td>
                                <td className="p-2 border border-gray-300 ...">
                                    {config.updateDate}
                                </td>
                                <td className="p-2 border border-gray-300 ...">
                                    <input name="inptAtivo"className="p-2 ml-2" type="checkbox" checked={config.enable} readOnly={true} />
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        <p>
                            <Link className='underline p-20' href='./configuracoes/cadastro'>Cadastrar</Link>
                            <Link className='underline' href='./'>Voltar</Link>
                        </p>
                    </div>
                );
                }
                if(response.status == 404)
                {
                        return (
                            <div className="mt-20 items-center justify-items-center">
                                <p>Nenhum item encontrado!</p>
                                <p>
                                    <Link className='underline p-20' href='./configuracoes/cadastro'>Cadastrar</Link>
                                    <Link className='underline' href='./'>Voltar</Link>
                                </p>
                            </div>
                        );
                }
                else {
                        return (
                            <div className="mt-20 items-center justify-items-center">
                                <p>Falha ao carregar dados: {response.status}: {response.statusText}</p>
                                <p>
                                    <Link className='underline p-20' href='./configuracoes/cadastro'>Cadastrar</Link>
                                    <Link className='underline' href='./'>Voltar</Link>
                                </p>
                            </div>
                        );
                }
    } catch (error) {
            return (
                <div className="mt-20 items-center justify-items-center">
                    <p>Falha ao carregar dados: API fora do ar!</p>
                    <p>
                        <Link className='underline p-20' href='./configuracoes/cadastro'>Cadastrar</Link>
                        <Link className='underline' href='./'>Voltar</Link>
                    </p>
                </div>
            );
    }
}