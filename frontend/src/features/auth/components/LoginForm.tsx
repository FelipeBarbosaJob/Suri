import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useToast } from "@/shared/hooks/use-toast";

interface LoginFormProps {
  onForgotPassword: () => void;
  onSignUp: () => void;
}

export function LoginForm({ onForgotPassword, onSignUp }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simular login
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo de volta ao Suri.",
      });
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Verifique suas credenciais e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input pl-12"
            required
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input pl-12 pr-12"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
          />
          <span className="text-sm text-gray-600">Lembrar de mim</span>
        </label>
        
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm text-orange-500 hover:text-orange-600 transition-colors"
        >
          Esqueceu a senha?
        </button>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="auth-button disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Entrando...</span>
          </div>
        ) : (
          "Entrar"
        )}
      </button>
    </form>
  );
}