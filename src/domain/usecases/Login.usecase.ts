// src/domain/usecases/Login.usecase.ts
import { IAuthRepository } from '../repositories/IAuthRepository';
import { AuthRepository } from '../../data/repositories/AuthRepository';

// Inicialización de la dependencia (puedes usar inyección de dependencia más avanzada si quieres)
const authRepository: IAuthRepository = new AuthRepository();

export class LoginUseCase {
  async execute(email: string, password: string): Promise<void> {
    if (!email || !password) {
        throw new Error("El email y la contraseña son requeridos.");
    }
    // Lógica de negocio adicional (ej: validación de formato) iría aquí
    await authRepository.login(email, password);
  }
}