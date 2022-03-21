/* eslint-disable array-callback-return */
import * as React from 'react';
import '../App.css';
import userDetails from '../types/types';

export interface ITableProps {
  headers: string[];
  data: userDetails[];
  editAction: (user: userDetails) => void;
  deleteAction: (user: userDetails) => void;
}

export default function Table(props: ITableProps) {
  const { headers, data, editAction, deleteAction } = props;
  const [usrData, setUsers] = React.useState<userDetails[]>([]);

  React.useEffect(() => {
    const lsdata = data as userDetails[];
    setUsers(lsdata)
  }, [data, usrData]);


  return (
    <div className="MyTable">
      <table>
        <tbody>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
          {usrData?.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.levelOfEducation}</td>
                <td>{item.gender}</td>
                <td>{item.profile}</td>
                <td>{item.password}</td>
                <td>
                  <button
                    type="button"
                    id={item.email as string}
                    onClick={() => editAction(item)}
                    className="btn btn-sm btn-secondary btn-ct"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    id={item.email as string}
                    onClick={() => deleteAction(item)}
                    className="btn btn-sm btn-danger btn-ct"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}



