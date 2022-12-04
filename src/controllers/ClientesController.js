import { pool } from "../db.js";

export const getClientes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM clientes");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getClientesById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM clientes WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};


export const createClientes = async (req, res) => {
  try {
    const { id_tipo_persona, nombre, apellido, cedula, celular, id_ciudad, id_departamento } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO clientes ( id_tipo_persona, nombre, apellido, cedula, celular, id_ciudad, id_departamento, estado) VALUES (?,?,?,?,?,?,?,1)",
      [ id_tipo_persona, nombre, apellido, cedula, celular, id_ciudad, id_departamento]
    );
    res.status(201).json({ id: rows.insertId,  id_tipo_persona, nombre, apellido, cedula, celular, id_ciudad, id_departamento, estado: 1 });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
