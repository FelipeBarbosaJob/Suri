import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Facebook, ArrowLeft } from 'lucide-react';
import { useToast } from '@/shared/hooks/use-toast';
import suriLogo from '@/assets/suri-logo.png';
import suriHello from '@/assets/suri-hello.png';
import surishopLogo from '@/assets/surishop.png';

type AuthMode = 'login' | 'signup' | 'forgot-password' | 'reset-password';

const AuthCard: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Form states
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [forgotData, setForgotData] = useState({ email: '' });
  const [resetData, setResetData] = useState({ 
    password: '', 
    confirmPassword: '' 
  });
  const [resetErrors, setResetErrors] = useState({ 
    password: '', 
    confirmPassword: '' 
  });
  const [loginErrors, setLoginErrors] = useState({ 
    email: '', 
    password: '' 
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
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

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Erro na confirmação",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Conta criada com sucesso!",
        description: "Bem-vindo ao Suri!",
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

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Email enviado!",
        description: "Verifique sua caixa de entrada.",
      });
      setMode('reset-password');
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


  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Senha redefinida!",
        description: "Sua senha foi alterada com sucesso.",
      });
      setMode('login');
    } catch (error) {
      toast({
        title: "Erro ao redefinir senha",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Se for recuperação/reset, mostramos apenas o painel branco
  if (mode === 'forgot-password' || mode === 'reset-password') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1877F2 0%, #145DBF 25%, #1877F2 50%, #145DBF 75%, #1877F2 100%)'
      }}>
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-32 h-32 bg-white rounded-full opacity-10 top-10 left-10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute w-24 h-24 bg-white rounded-full opacity-10 top-32 right-16"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute w-16 h-16 bg-white rounded-full opacity-10 bottom-20 left-20"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Overlay sutil para suavizar */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
        
        <motion.div 
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative z-10"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {mode === 'forgot-password' && (
            <motion.form 
              onSubmit={handleForgotPassword} 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img src={suriLogo} alt="Suri Logo" className="w-12 h-12 object-contain" />
                </div>
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Recuperar Senha</h3>
                <p className="text-gray-600 text-sm">Digite seu email e enviaremos um link para redefinir sua senha</p>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email"
                  value={forgotData.email}
                  onChange={(e) => setForgotData({email: e.target.value})}
                  className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #1877F2, #145DBF)',
                  boxShadow: '0 8px 32px -8px rgba(20, 93, 191, 0.35)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  'Enviar Link de Recuperação'
                )}
              </motion.button>

              <motion.div 
                className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-800 text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                Enviaremos um email com instruções para redefinir sua senha. Verifique também a sua caixa de spam.
              </motion.div>

              <motion.div 
                className="flex justify-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <motion.button
                  type="button"
                  onClick={() => setMode('login')}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar ao login</span>
                </motion.button>
              </motion.div>
            </motion.form>
          )}

          {mode === 'reset-password' && (
            <motion.form 
              onSubmit={handleResetPassword} 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img src={suriLogo} alt="Suri Logo" className="w-12 h-12 object-contain" />
                </div>
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Lock className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Nova Senha</h3>
                <p className="text-gray-600 text-sm">Digite sua nova senha abaixo</p>
              </motion.div>

              <div className="space-y-6">
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-700">
                    Nova Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Digite sua nova senha"
                      value={resetData.password}
                      onChange={(e) => setResetData({...resetData, password: e.target.value})}
                      className="w-full px-4 py-3 pl-12 pr-12 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
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
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-700">
                    Confirmar Nova Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Digite novamente sua nova senha"
                      value={resetData.confirmPassword}
                      onChange={(e) => setResetData({...resetData, confirmPassword: e.target.value})}
                      className="w-full px-4 py-3 pl-12 pr-12 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
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
                </motion.div>
              </div>

              <motion.div 
                className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-semibold text-blue-800 mb-1">Requisitos da Senha</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Use pelo menos 8 caracteres</li>
                      <li>• Inclua letras maiúsculas e minúsculas</li>
                      <li>• Adicione números e símbolos</li>
                      <li>• Certifique-se de que as senhas coincidem</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #1877F2, #145DBF)',
                  boxShadow: '0 8px 32px -8px rgba(20, 93, 191, 0.35)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Redefinindo...</span>
                  </div>
                ) : (
                  'Redefinir Senha'
                )}
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    );
  }

  return (
      <div className="min-h-screen flex items-center justify-center p-1 sm:p-4 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1877F2 0%, #145DBF 25%, #1877F2 50%, #145DBF 75%, #1877F2 100%)'
      }}>
      {/* Elementos geométricos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Formas geométricas grandes */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 opacity-20"
          style={{
            background: 'linear-gradient(45deg, #1877F2, #145DBF)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 opacity-25"
          style={{
            background: 'linear-gradient(45deg, #1877F2, #145DBF)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-30"
          style={{
            background: 'linear-gradient(45deg, #145DBF, #1877F2)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Formas hexagonais */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20"
          style={{
            background: 'linear-gradient(45deg, #1877F2, #145DBF)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
          }}
          animate={{
            rotate: [0, 180, 360],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-24 h-24 opacity-25"
          style={{
            background: 'linear-gradient(45deg, #145DBF, #1877F2)',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}
          animate={{
            rotate: [360, 180, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Círculos com gradientes */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-40 h-40 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #1877F2, #145DBF)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/5 w-48 h-48 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #1877F2, #145DBF)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Linhas de energia */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${10 + i * 15}%`}
              y1="0%"
              x2={`${20 + i * 20}%`}
              y2="100%"
              stroke={`url(#gradient-${i})`}
              strokeWidth="3"
              strokeDasharray="10,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
          
          <defs>
            <linearGradient id="gradient-0" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1877F2" />
              <stop offset="100%" stopColor="#145DBF" />
            </linearGradient>
            <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#145DBF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1877F2" />
            </linearGradient>
            <linearGradient id="gradient-5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1877F2" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Partículas flutuantes coloridas */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#1877F2', '#145DBF', '#8B5CF6', '#7C3AED', '#3B82F6'][Math.floor(Math.random() * 5)]
              }, ${
                ['#145DBF', '#8B5CF6', '#7C3AED', '#3B82F6', '#1877F2'][Math.floor(Math.random() * 5)]
              })`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.6, 0.2, 0.6],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Overlay sutil para suavizar */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
      </div>
      <div className="w-full max-w-6xl bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden mx-2 sm:mx-0">
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[700px] overflow-hidden">
          {/* Painel Azul com animação */}
          <motion.div
            key={mode === 'login' ? 'login-panel' : 'signup-panel'}
            initial={{ 
              x: window.innerWidth >= 1024 ? (mode === 'login' ? '-100%' : '100%') : 0,
              y: window.innerWidth < 1024 ? (mode === 'login' ? '-100%' : '100%') : 0
            }}
            animate={{ x: 0, y: 0 }}
            exit={{ 
              x: window.innerWidth >= 1024 ? (mode === 'login' ? '100%' : '-100%') : 0,
              y: window.innerWidth < 1024 ? (mode === 'login' ? '100%' : '-100%') : 0
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto relative overflow-hidden order-2 lg:order-1 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #1877F2, #145DBF)',
              minHeight: '500px'
            }}
          >
            {/* Floating shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute w-32 h-32 bg-white rounded-full opacity-20 top-10 left-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute w-24 h-24 bg-white rounded-full opacity-20 top-32 right-16"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute w-16 h-16 bg-white rounded-full opacity-20 bottom-20 left-20"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-8 z-10">
              <div className="text-center space-y-4 sm:space-y-6">
                {/* Logo Surishop no topo */}
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
                >
                  <img src={surishopLogo} alt="Surishop Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                </motion.div>

                <motion.h1
                  className="text-2xl sm:text-4xl font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {mode === 'login' ? 'Bem-vindo de volta!' : 'Junte-se à Suri!'}
                </motion.h1>
                
                <motion.p
                  className="text-sm sm:text-lg opacity-90 leading-relaxed max-w-md px-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {mode === 'login' 
                    ? 'Continue sua jornada de transformação digital com nossa plataforma de chatbots inteligentes'
                    : 'Transforme o atendimento da sua empresa com IA conversacional de última geração'
                  }
                </motion.p>

                
                <motion.button
                  className="px-6 sm:px-8 py-3 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-blue-700 hover:scale-105 text-sm sm:text-base shadow-lg"
                  onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {mode === 'login' ? 'Criar Conta Gratuita' : 'Fazer Login'}
                </motion.button>

                {/* Logos das redes sociais */}
                <motion.div 
                  className="flex justify-center space-x-4 mt-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="#25D366"/>
                    </svg>
                  </motion.div>
                  
                  <motion.div
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#833AB4"/>
                          <stop offset="25%" stopColor="#C13584"/>
                          <stop offset="50%" stopColor="#E1306C"/>
                          <stop offset="75%" stopColor="#FD1D1D"/>
                          <stop offset="100%" stopColor="#F77737"/>
                        </linearGradient>
                      </defs>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagram-gradient)"/>
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Testimonial ou estatística */}
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-sm mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="text-xs sm:text-sm opacity-90 italic">
                    "A Suri revolucionou nosso atendimento. 95% de satisfação dos clientes!"
                  </div>
                  <div className="text-xs opacity-70 mt-1">- Maria Silva, CEO TechCorp</div>
                </motion.div>
              </div>
            </div>

            {/* Logo Suri Hello - Posicionada no canto direito inferior */}
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
                x: 0, 
                opacity: 1, 
                scale: 1
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                x: { delay: 0.8, duration: 1, ease: "easeOut" },
                opacity: { delay: 0.8, duration: 1, ease: "easeOut" },
                scale: { delay: 0.8, duration: 1, ease: "easeOut" }
              }}
              initial={{ x: 100, opacity: 0, scale: 0.5 }}
            >
              <img 
                src={suriHello} 
                alt="Suri Hello" 
                className="w-full h-full object-contain drop-shadow-2xl filter brightness-110 contrast-110" 
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Formulários com animação */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-4 sm:p-8 order-1 lg:order-2 relative min-h-[400px] lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              {mode === 'login' ? (
                <motion.div
                  key="formLogin"
                  initial={{ opacity: 0, x: window.innerWidth >= 1024 ? 50 : 0, y: window.innerWidth < 1024 ? 50 : 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: window.innerWidth >= 1024 ? -50 : 0, y: window.innerWidth < 1024 ? -50 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-sm bg-white rounded-2xl p-4 sm:p-8 shadow-xl border border-gray-100 relative z-10"
                >
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <img src={suriLogo} alt="Suri Logo" className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Entrar na Conta</h2>
                    <p className="text-sm sm:text-base text-gray-600">Entre com suas credenciais</p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          placeholder="Email"
                          value={loginData.email}
                          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                          className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
                          required
                        />
                      </div>

                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Senha"
                          value={loginData.password}
                          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                          className="w-full px-4 py-3 pl-12 pr-12 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
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

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                        <span className="text-sm text-gray-600">Lembrar de mim</span>
                      </label>
                      
                      <button
                        type="button"
                        onClick={() => setMode('forgot-password')}
                        className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Esqueceu a senha?
                      </button>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: 'linear-gradient(135deg, #1877F2, #145DBF)',
                        boxShadow: '0 8px 32px -8px rgba(20, 93, 191, 0.35)'
                      }}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Entrando...</span>
                        </div>
                      ) : (
                        'Entrar'
                      )}
                    </button>
                  </form>

                  {/* Social Login */}
                  <div className="mt-8">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-gray-50 text-gray-500">Ou continue com</span>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-6">
                      <button
                        aria-label="Continuar com Facebook"
                        className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all duration-300 hover:border-blue-600 hover:bg-blue-50"
                      >
                        <Facebook className="w-5 h-5 text-blue-600" />
                      </button>

                      <button
                        aria-label="Continuar com Google"
                        className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all duration-300 hover:border-blue-600 hover:bg-blue-50"
                      >
                        <svg viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                          <path fill="#EA4335" d="M255.9 133.5c0-10.6-.9-18.4-2.8-26.5H130v48.1h71.9c-1.5 12-9.7 30.1-27.9 42.3l-.3 1.9 40.5 31.4 2.8.3c25.7-23.7 38.9-58.6 38.9-97.5z"/>
                          <path fill="#34A853" d="M130 261.1c35.3 0 64.9-11.6 86.6-31.6l-41.3-32c-11 7.7-25.9 13.1-45.3 13.1-34.6 0-63.9-23.1-74.3-55l-1.8.2-40.4 31.2-.5 1.7C34.8 231.5 79.7 261.1 130 261.1z"/>
                          <path fill="#4A90E2" d="M55.7 155.6c-2.7-8.1-4.3-16.8-4.3-25.6s1.6-17.6 4.1-25.6l-.1-1.7L15 71.1l-1.3.6C5.1 90.4 0 111.2 0 133.9s5.1 43.5 13.7 62.3l42-32.3z"/>
                          <path fill="#FBBC05" d="M130 50.5c24.6 0 41.1 10.6 50.6 19.5l36.9-36C194.8 10.1 165.3 0 130 0 79.7 0 34.8 29.6 13.7 71.6l42.1 32.3C66.3 73.6 95.6 50.5 130 50.5z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="formSignup"
                  initial={{ opacity: 0, x: window.innerWidth >= 1024 ? -50 : 0, y: window.innerWidth < 1024 ? 50 : 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: window.innerWidth >= 1024 ? 50 : 0, y: window.innerWidth < 1024 ? -50 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-sm bg-white rounded-2xl p-4 sm:p-8 shadow-xl border border-gray-100 relative z-10"
                >
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <img src={suriLogo} alt="Suri Logo" className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Criar Conta</h2>
                    <p className="text-sm sm:text-base text-gray-600">Preencha os dados para criar sua conta</p>
                  </div>

                  <form onSubmit={handleSignup} className="space-y-6">
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Nome completo"
                          value={signupData.name}
                          onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                          className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
                          required
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          placeholder="Email"
                          value={signupData.email}
                          onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                          className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
                          required
                        />
                      </div>

                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Senha"
                          value={signupData.password}
                          onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                          className="w-full px-4 py-3 pl-12 pr-12 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
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
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirmar senha"
                          value={signupData.confirmPassword}
                          onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                          className="w-full px-4 py-3 pl-12 pr-12 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
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
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" required />
                      <span className="text-sm text-gray-600">
                        Aceito os <a href="https://cbmstg.blob.core.windows.net/chatbots/cb1000019/media/file-fe73re45-77cc-4a2b-a3cb-60ebfc04b236-2024-04-03T151759.7513252-0300.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold no-underline">Termos e Condições de Uso</a>
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: 'linear-gradient(135deg, #1877F2, #145DBF)',
                        boxShadow: '0 8px 32px -8px rgba(20, 93, 191, 0.35)'
                      }}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Criando conta...</span>
                        </div>
                      ) : (
                        'Criar Conta'
                      )}
                    </button>
                  </form>

                  {/* Social Login */}
                  <div className="mt-8">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-gray-50 text-gray-500">Ou continue com</span>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-6">
                      <button
                        aria-label="Continuar com Facebook"
                        className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all duration-300 hover:border-blue-600 hover:bg-blue-50"
                      >
                        <Facebook className="w-5 h-5 text-blue-600" />
                      </button>

                      <button
                        aria-label="Continuar com Google"
                        className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all duration-300 hover:border-blue-600 hover:bg-blue-50"
                      >
                        <svg viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                          <path fill="#EA4335" d="M255.9 133.5c0-10.6-.9-18.4-2.8-26.5H130v48.1h71.9c-1.5 12-9.7 30.1-27.9 42.3l-.3 1.9 40.5 31.4 2.8.3c25.7-23.7 38.9-58.6 38.9-97.5z"/>
                          <path fill="#34A853" d="M130 261.1c35.3 0 64.9-11.6 86.6-31.6l-41.3-32c-11 7.7-25.9 13.1-45.3 13.1-34.6 0-63.9-23.1-74.3-55l-1.8.2-40.4 31.2-.5 1.7C34.8 231.5 79.7 261.1 130 261.1z"/>
                          <path fill="#4A90E2" d="M55.7 155.6c-2.7-8.1-4.3-16.8-4.3-25.6s1.6-17.6 4.1-25.6l-.1-1.7L15 71.1l-1.3.6C5.1 90.4 0 111.2 0 133.9s5.1 43.5 13.7 62.3l42-32.3z"/>
                          <path fill="#FBBC05" d="M130 50.5c24.6 0 41.1 10.6 50.6 19.5l36.9-36C194.8 10.1 165.3 0 130 0 79.7 0 34.8 29.6 13.7 71.6l42.1 32.3C66.3 73.6 95.6 50.5 130 50.5z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
