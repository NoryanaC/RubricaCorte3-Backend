import { pool } from "../db.js";

export const getFacturas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM facturas");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getFacturasById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM facturas WHERE id = ?", [
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


export const createFacturas = async (req, res) => {
  try {
    const { id_cliente, id_producto, cantidad } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO facturas ( cantidad, id_cliente, id_producto, estado) VALUES (?,?,?,1)",
      [cantidad, id_cliente, id_producto]
    );
    res.status(201).json({ id: rows.insertId,  id_cliente, id_producto, cantidad, estado: 1 });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};