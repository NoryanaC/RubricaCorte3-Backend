import { Router } from "express";
import { getDepartamentoId, getDepartamento } from "../controllers/Departamentocontroller.js";
import { getCiudades, getCiudadId,getDepaCiudadId } from "../controllers/CiudadesController.js";
import { getTipoPersona, getTipoPersonaId } from "../controllers/TipoPersonaController.js";
import { getProductos, getProductosById, createProductos, updateProductos, CambioEstado } from "../controllers/ProductosController.js"
import { getClientes, getClientesById, createClientes } from "../controllers/ClientesController.js"
import { getFacturas, getFacturasById, createFacturas } from "../controllers/FacturasController.js"

const router = Router();

router.get("/departamento", getDepartamento);

router.get("/departamento/:id", getDepartamentoId);

router.get("/ciudades", getCiudades);

router.get("/ciudades/:id", getCiudadId);

router.get("/ciudad/depa/:id", getDepaCiudadId);

router.get("/tipopersona", getTipoPersona);

router.get("/tipopersona/:id", getTipoPersonaId);

router.get("/productos", getProductos);

router.get("/productos/:id", getProductosById);

router.post("/productos-create", createProductos);

router.patch("/productos-update/:id", updateProductos);

router.patch("/productos-cambio-estado/:id", CambioEstado);

router.get("/clientes", getClientes);

router.get("/clientes/:id", getClientesById);

router.post("/clientes-create", createClientes);

router.get("/facturas", getFacturas);

router.get("/facturas/:id", getFacturasById);

router.post("/facturas-create", createFacturas);

export default router;
