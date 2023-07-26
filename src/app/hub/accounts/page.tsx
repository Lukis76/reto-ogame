import { Button } from '@/components/ui/button';


const AccountsPage = () => {
  const universos = [
    {
      id: "nufh983hfn98h93hf",
      Universo: "Universo 1",
      Pais: "Pais 1",
      Conectdos: "Conectdos 1",
      Tipo: "Tipo 1",
      Edad: "Edad 1",
      Jugador: "Jugador 1",
      Rango: "Rango 1",
    },
    {
      id: "nf3h43f893h9f8f3f",
      Universo: "Universo 2",
      Pais: "Pais 2",
      Conectdos: "Conectdos 2",
      Tipo: "Tipo 2",
      Edad: "Edad 2",
      Jugador: "Jugador 2",
      Rango: "Rango 2",
    },
  ];
  return (
    <div>
      <table className="w-full table-fixed">
        <caption>Listado de cuentas</caption>
        {/* <colgroup>
          <col span={1} className="" />
          <col span={1} className="" />
          <col span={1} className="" />
          <col span={1} className="" />
        </colgroup> */}

        <thead className="table-header-group">
          <tr className="">
            <th className="">Universo</th>
            <th className="">Pais</th>
            <th className="">Conectdos</th>
            <th className="">Tipo</th>
            <th className="">Edad (en dias)</th>
            <th className="">Jugador</th>
            <th className="">Rango</th>
          </tr>
        </thead>
        <tbody className="table-row-group">
          {universos.map((universo) => {
            return (
              <tr key={universo.id} className="table-row">
                <td className="table-cell text-center">{universo.Universo}</td>
                <td className="table-cell text-center">{universo.Pais}</td>
                <td className="table-cell text-center">{universo.Conectdos}</td>
                <td className="table-cell text-center">{universo.Tipo}</td>
                <td className="table-cell text-center">{universo.Edad}</td>
                <td className="table-cell text-center">{universo.Jugador}</td>
                <td className="table-cell text-center">{universo.Rango}</td>
                <td className="table-cell text-center">
                  <Button>Jugar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Email</th>
            <th>Edad</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AccountsPage;
