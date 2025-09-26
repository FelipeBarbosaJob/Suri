import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useToast } from "@/shared/hooks/use-toast";

interface SignUpFormProps {
  onBackToLogin: () => void;
}

export function SignUpForm({ onBackToLogin }: SignUpFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Erro na confirmação",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simular cadastro
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Conta criada com sucesso!",
        description: "Bem-vindo ao Suri! Verifique seu email para ativar a conta.",
      });
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: "Tente novamente mais tarde.",
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
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="auth-input pl-12"
            required
          />
        </div>

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

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="auth-input pl-12 pr-12"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
          required
        />
        <span className="text-sm text-gray-600">
          Concordo com os{" "}
          <a href="#" className="text-orange-500 hover:text-orange-600">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-orange-500 hover:text-orange-600">
            política de privacidade
          </a>
        </span>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="auth-button disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Criando conta...</span>
          </div>
        ) : (
          "Criar Conta"
        )}
      </button>

      <p className="text-center text-sm text-gray-600">
        Já tem uma conta?{" "}
        <button
          type="button"
          onClick={onBackToLogin}
          className="text-orange-500 hover:text-orange-600 font-medium"
        >
          Fazer login
        </button>
      </p>
    </form>
  );
}