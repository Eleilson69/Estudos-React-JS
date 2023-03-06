import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css'

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
          {tarefas.map((terefa, index) => (
            <li key={terefa}>
              {terefa}
              <span>
                <FaEdit
                  onClick={(e) => handleEdit(e, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
  );
}
