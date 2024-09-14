import express from 'express';
import { 
    listarCuenta, 
    crearCuenta, 
    consignarDinero, 
    retirarDinero, 
    eliminarCuenta 
} from '../controllers/cuentaController.js';

const router = express.Router();

router.get('/:numeroCuenta', listarCuenta);
router.post('/', crearCuenta);
router.post('/consignar/:numeroCuenta', consignarDinero);
router.post('/retirar/:numeroCuenta', retirarDinero);
router.delete('/:numeroCuenta', eliminarCuenta);

export default router;
