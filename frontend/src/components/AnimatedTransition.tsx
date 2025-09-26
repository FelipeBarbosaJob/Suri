import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Home, ArrowRight, ArrowLeft } from 'lucide-react';

const AnimatedTransition: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'cadastro'>('home');

  const toggleScreen = () => {
    setCurrentScreen(currentScreen === 'home' ? 'cadastro' : 'home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="relative h-[600px]">
          {/* Container com as duas telas lado a lado */}
          <motion.div
            className="flex h-full"
            animate={{
              x: currentScreen === 'home' ? 0 : '-50%'
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "tween"
            }}
          >
            {/* Tela Home - Sempre visível */}
            <motion.div
              className="w-full flex-shrink-0 bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center text-white p-8"
              initial={false}
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

              {/* Content */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center space-y-6 z-10"
              >
                <motion.div
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Home className="w-10 h-10 text-blue-600" />
                </motion.div>
                
                <motion.h1
                  className="text-4xl font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Bem-vindo ao Suri
                </motion.h1>
                
                <motion.p
                  className="text-lg opacity-90 leading-relaxed max-w-md"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Entre na plataforma Suri e encante seus clientes com chatbots inteligentes
                </motion.p>
                
                <motion.button
                  onClick={toggleScreen}
                  className="px-8 py-3 rounded-full border-2 border-white text-white font-medium transition-all duration-300 hover:bg-white hover:text-blue-700 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Criar Conta</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Tela Cadastro - Sempre visível */}
            <motion.div
              className="w-full flex-shrink-0 bg-white flex flex-col items-center justify-center p-8"
              initial={false}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-full max-w-md space-y-6"
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <User className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h2
                    className="text-2xl font-bold text-gray-800 mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Criar Conta
                  </motion.h2>
                  
                  <motion.p
                    className="text-gray-600"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Preencha os dados para criar sua conta
                  </motion.p>
                </div>

                {/* Form */}
                <motion.form
                  className="space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="space-y-4">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      <input
                        type="text"
                        placeholder="Nome completo"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                    >
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    >
                      <input
                        type="password"
                        placeholder="Senha"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.4 }}
                    >
                      <input
                        type="password"
                        placeholder="Confirmar senha"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.4 }}
                  >
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" required />
                    <span className="text-sm text-gray-600">
                      Concordo com os <a href="#" className="text-blue-600 hover:text-blue-700">termos de uso</a>
                    </span>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #1877F2, #145DBF)',
                      boxShadow: '0 8px 32px -8px rgba(20, 93, 191, 0.35)'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.4 }}
                  >
                    Criar Conta
                  </motion.button>

                  <motion.div
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                  >
                    <button
                      type="button"
                      onClick={toggleScreen}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 mx-auto"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Voltar ao início</span>
                    </button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTransition;
