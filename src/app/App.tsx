import { useState } from 'react';
import { 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  MapPin, 
  AlertCircle, 
  Landmark, 
  Users, 
  Award,
  CheckCircle,
  Clock,
  CreditCard,
  Monitor,
  Calendar,
  TrendingUp,
  Wifi,
  Headphones,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const scrollToForm = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const modules = [
    {
      icon: Plane,
      title: '1. Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      result: 'Уверенность уже в первые часы за границей.',
      color: 'from-[#14b8a6] to-[#0d9488]'
    },
    {
      icon: Hotel,
      title: '2. В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      result: 'Практика вежливых фраз и повседневной лексики.',
      color: 'from-[#f59e0b] to-[#d97706]'
    },
    {
      icon: UtensilsCrossed,
      title: '3. Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      result: 'Развитие гастрономического словаря и уверенности в общении.',
      color: 'from-[#ec4899] to-[#db2777]'
    },
    {
      icon: MapPin,
      title: '4. На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      result: 'Понимание устной речи и произношения в реальных ситуациях.',
      color: 'from-[#8b5cf6] to-[#7c3aed]'
    },
    {
      icon: AlertCircle,
      title: '5. Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      result: 'Важные фразы, которые могут спасти отпуск.',
      color: 'from-[#ef4444] to-[#dc2626]'
    },
    {
      icon: Landmark,
      title: '6–7. Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      result: 'Погружение в культурный контекст через язык.',
      color: 'from-[#14b8a6] to-[#0d9488]'
    },
    {
      icon: Users,
      title: '8. Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      result: 'Игровая практика диалогов и неформального общения.',
      color: 'from-[#f59e0b] to-[#d97706]'
    },
    {
      icon: Award,
      title: '9–10. Дипломный проект: «Мой идеальный отпуск»',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      result: 'Развитие связной речи и творческого самовыражения.',
      color: 'from-[#10b981] to-[#059669]'
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Практическая речь',
      description: 'Акцент на практическую, живую речь, а не на грамматику ради грамматики'
    },
    {
      icon: Users,
      title: 'Реальные ситуации',
      description: 'Все ситуации — из реальной жизни путешественника'
    },
    {
      icon: TrendingUp,
      title: 'Интерактивность',
      description: 'Ролевые игры, аудиоситуации, мини-квесты'
    },
    {
      icon: Award,
      title: 'Прогресс до B1',
      description: 'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#111827] to-[#0a0e1a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/20 via-transparent to-[#f59e0b]/20 pointer-events-none" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#14b8a6]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#14b8a6]/20 to-[#f59e0b]/20 backdrop-blur-sm rounded-full border border-[#14b8a6]/30">
                <span className="text-sm sm:text-base bg-gradient-to-r from-[#2dd4bf] to-[#fbbf24] bg-clip-text text-transparent font-medium">
                  Курс для учеников 4–8 классов
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#2dd4bf] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                  Английский
                </span>
                <br />
                <span className="text-[#f1f5f9]">для путешествий</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#cbd5e1] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
                Этот курс научит вашего ребёнка реальному разговорному английскому, 
                который пригодится в отпуске, поездках и будущих путешествиях!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToForm}
                  className="group px-8 py-4 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#f59e0b] text-[#0a0e1a] rounded-xl font-semibold text-lg shadow-lg shadow-[#f59e0b]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#f59e0b]/50"
                >
                  Записаться на курс
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
                
                <a
                  href="#program"
                  className="px-8 py-4 bg-[#1e293b]/50 hover:bg-[#1e293b] backdrop-blur-sm text-[#2dd4bf] rounded-xl font-semibold text-lg border border-[#14b8a6]/30 hover:border-[#14b8a6] transition-all duration-300"
                >
                  Узнать подробнее
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#94a3b8]/20">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#14b8a6] to-[#2dd4bf] bg-clip-text text-transparent">
                    10
                  </div>
                  <div className="text-sm text-[#94a3b8] mt-1">уроков</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                    A2–B1
                  </div>
                  <div className="text-sm text-[#94a3b8] mt-1">уровень</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#ec4899] to-[#f472b6] bg-clip-text text-transparent">
                    до 6
                  </div>
                  <div className="text-sm text-[#94a3b8] mt-1">детей</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#14b8a6]/20 border border-[#94a3b8]/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1773779717914-8d118a5f900d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBzdW5zZXQlMjBhaXJwbGFuZXxlbnwxfHx8fDE3NzQ4NTI3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Путешествие на закате"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-[#111827] to-[#1e293b] backdrop-blur-sm rounded-full border border-[#14b8a6]/30 shadow-lg">
                <span className="text-sm text-[#2dd4bf] font-semibold">✨ Набор открыт!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-transparent to-[#111827]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#2dd4bf] to-[#fbbf24] bg-clip-text text-transparent">
                Для кого курс
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="group p-8 bg-gradient-to-br from-[#1e293b] to-[#111827] rounded-2xl border border-[#14b8a6]/30 hover:border-[#14b8a6] transition-all duration-300 hover:shadow-lg hover:shadow-[#14b8a6]/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📚
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2dd4bf] mb-2">Первая группа</h3>
                  <p className="text-[#cbd5e1] text-lg">4–5 класс</p>
                </div>
              </div>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#1e293b] to-[#111827] rounded-2xl border border-[#f59e0b]/30 hover:border-[#f59e0b] transition-all duration-300 hover:shadow-lg hover:shadow-[#f59e0b]/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#fbbf24] mb-2">Вторая группа</h3>
                  <p className="text-[#cbd5e1] text-lg">6–8 класс</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#2dd4bf] to-[#fbbf24] bg-clip-text text-transparent">
                Программа курса
              </span>
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              8 практических модулей и итоговый проект
            </p>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#1e293b] to-[#111827] rounded-2xl border border-[#94a3b8]/20 hover:border-[#14b8a6]/50 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleModule(index)}
                  className="w-full p-6 sm:p-8 flex items-start gap-4 sm:gap-6 text-left"
                >
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <module.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#f1f5f9] mb-2">
                      {module.title}
                    </h3>
                    <p className="text-[#94a3b8] text-sm sm:text-base">
                      {module.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    {expandedModule === index ? (
                      <ChevronUp className="w-5 h-5 text-[#14b8a6]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#94a3b8]" />
                    )}
                  </div>
                </button>

                {expandedModule === index && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 border-t border-[#94a3b8]/10">
                    <div className="flex items-start gap-3 mt-4">
                      <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#cbd5e1]">{module.result}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#111827]/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#2dd4bf] to-[#fbbf24] bg-clip-text text-transparent">
                Почему этот курс особенный?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-[#1e293b] to-[#111827] rounded-2xl border border-[#94a3b8]/20 hover:border-[#14b8a6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#14b8a6]/10 text-center"
              >
                <div className="inline-flex w-14 h-14 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#f1f5f9] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#94a3b8]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#2dd4bf] to-[#fbbf24] bg-clip-text text-transparent">
                Что потребуется
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-[#1e293b] to-[#111827] rounded-2xl border border-[#94a3b8]/20 text-center">
              <div className="inline-flex w-12 h-12 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-xl items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#cbd5e1] text-sm">
                Стационарный компьютер или ноутбук
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#1e293b] to-[#111827] rounded-2xl border border-[#94a3b8]/20 text-center">
              <div className="inline-flex w-12 h-12 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-xl items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#cbd5e1] text-sm">
                Наушники и микрофон
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#1e293b] to-[#111827] rounded-2xl border border-[#94a3b8]/20 text-center">
              <div className="inline-flex w-12 h-12 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#cbd5e1] text-sm">
                Стабильный интернет и Zoom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule and Pricing Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#111827]/50 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Schedule */}
            <div className="p-8 bg-gradient-to-br from-[#1e293b] to-[#111827] rounded-2xl border border-[#14b8a6]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2dd4bf]">Расписание</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#0a0e1a]/50 rounded-xl">
                  <Calendar className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#f1f5f9] font-semibold">Четверг, 15:00 (МСК)</p>
                    <p className="text-[#94a3b8] text-sm">группа 4–5 класс</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#0a0e1a]/50 rounded-xl">
                  <Calendar className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#f1f5f9] font-semibold">Пятница, 15:30 (МСК)</p>
                    <p className="text-[#94a3b8] text-sm">группа 6–8 класс</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="p-8 bg-gradient-to-br from-[#1e293b] to-[#111827] rounded-2xl border border-[#f59e0b]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#fbbf24]">Стоимость</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#0a0e1a]/50 rounded-xl border-l-4 border-[#f59e0b]">
                  <p className="text-[#94a3b8] text-sm mb-1">Полный курс (10 уроков)</p>
                  <p className="text-3xl font-bold text-[#fbbf24]">12 000 руб</p>
                </div>

                <div className="p-4 bg-[#0a0e1a]/50 rounded-xl">
                  <p className="text-[#94a3b8] text-sm mb-1">Абонемент</p>
                  <p className="text-2xl font-bold text-[#f1f5f9]">1 300 руб / урок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="signup-section" className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden p-8 sm:p-12 bg-gradient-to-br from-[#1e293b] via-[#111827] to-[#0a0e1a] rounded-3xl border border-[#14b8a6]/30 shadow-2xl shadow-[#14b8a6]/10">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#14b8a6]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#14b8a6]/20 to-[#f59e0b]/20 backdrop-blur-sm rounded-full border border-[#14b8a6]/30">
                <span className="text-sm bg-gradient-to-r from-[#2dd4bf] to-[#fbbf24] bg-clip-text text-transparent font-semibold">
                  📢 Набор открыт!
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#2dd4bf] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                  Готовы начать?
                </span>
              </h2>

              <p className="text-lg text-[#cbd5e1] max-w-2xl mx-auto">
                Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. 
                <span className="block mt-2 text-[#fbbf24] font-semibold">Места ограничены!</span>
              </p>

              <p className="text-base text-[#94a3b8] max-w-xl mx-auto">
                Запишитесь сейчас — и следующее путешествие станет первым, 
                где ваш ребёнок заговорит по-английски без страха!
              </p>

              <div className="pt-4">
                <button className="group px-10 py-5 bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] hover:from-[#fbbf24] hover:via-[#f59e0b] hover:to-[#fbbf24] text-[#0a0e1a] rounded-2xl font-bold text-xl shadow-2xl shadow-[#f59e0b]/40 transition-all duration-300 hover:scale-105 hover:shadow-[#f59e0b]/60 bg-[length:200%_100%] hover:bg-right">
                  Записаться на курс
                  <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-4">
                <CheckCircle className="w-5 h-5 text-[#10b981]" />
                <span className="text-sm text-[#94a3b8]">Быстрый ответ в течение 24 часов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#94a3b8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-[#94a3b8] text-sm">
            <p>© 2026 Курс «Английский для путешествий». Все права защищены.</p>
            <p className="mt-2">🌍 Откройте мир вместе с английским языком!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
