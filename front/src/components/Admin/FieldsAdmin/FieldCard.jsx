import FieldEdit from './FieldEdit';

const FieldCard = ({ field, handlerDesactive, getField }) => {
  console.log(field.status ? "Activo" : "Desactivo");
  return (
    <tr key={field.id}>
        <td>{field.name}</td>
        <td>{field.sports}</td>
        <td>{field.city}</td>
        <td>{field.address}</td>
        <td>{field.phone}</td>
        <td>{field.status ? "Activo": "Desactivo"}</td>
        <td>
        <FieldEdit field={field} getField={getField} />
        <button onClick={() => handlerDesactive(field.id)}>Desactivar</button>
      </td>
    </tr>
  );
};

export default FieldCard;