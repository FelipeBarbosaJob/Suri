import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { useToast } from "@/shared/hooks/use-toast";

interface ForgotPasswordFormProps {
  onBack: () => void;
  onResetPassword?: () => void;
}

export function ForgotPasswordForm({ onBack, onResetPassword }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simular envio de email
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Email enviado!",
        description: "Verifique sua caixa de entrada para redefinir sua senha.",
      });
      
      onResetPassword?.();
    } catch (error) {
      toast({
        title: "Erro ao enviar email",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-orange-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Recuperar Senha
        </h3>
        <p className="text-gray-600 text-sm">
          Digite seu email e enviaremos um link para redefinir sua senha
        </p>
      </div>

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
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="auth-button disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Enviando...</span>
          </div>
        ) : (
          "Enviar Link de Recuperação"
        )}
      </button>

      <button
        type="button"
        onClick={onBack}
        className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar ao login</span>
      </button>
    </form>
  );
}