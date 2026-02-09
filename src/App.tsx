import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  BookOpen, 
  Sparkles, 
  TrendingUp, 
  Users,
  Zap,
  ArrowRight,
  Quote,
  Layers,
  Compass,
  Rocket
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const BentoCard = ({ 
  children, 
  className = '', 
  delay = 0,
  colSpan = 1,
  rowSpan = 1 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  colSpan?: number;
  rowSpan?: number;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.02, 
        transition: { duration: 0.3, ease: 'easeOut' } 
      }}
      className={`
        relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl
        border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]
        transition-shadow duration-500
        ${colSpan === 2 ? 'md:col-span-2' : ''}
        ${rowSpan === 2 ? 'md:row-span-2' : ''}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative z-10 h-full p-6 md:p-8">
        {children}
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
};

const Tag = ({ children, color = 'blue' }: { children: React.ReactNode; color?: 'blue' | 'amber' | 'emerald' | 'rose' | 'violet' }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    rose: 'bg-rose-50 text-rose-700 border-rose-100',
    violet: 'bg-violet-50 text-violet-700 border-violet-100',
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors[color]}`}>
      {children}
    </span>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 py-8 md:py-12"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/60 mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-slate-600">Dan Koe</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            如果你有多个兴趣
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              不要浪费未来 2-3 年
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            多兴趣不是弱点，而是AI时代的超能力。如何成为通才，打造属于自己的创作人生。
          </p>
        </div>
      </motion.header>

      {/* Bento Grid */}
      <main className="px-6 pb-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Core Message - Large Card */}
          <BentoCard colSpan={2} rowSpan={2} className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80">
            <div className="h-full flex flex-col justify-between">
              <div>
                <Tag color="blue">核心洞察</Tag>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-4 mb-4">
                  多兴趣是一种超能力
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  工业时代的"专业化"正在终结。我们正处于第二次文艺复兴——
                  印刷术让知识民主化催生了达·芬奇，互联网让分发成本崩溃，
                  正在催生新一代通才。
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">自我教育</h4>
                    <p className="text-sm text-slate-600">亲自掌舵学习，而非依赖传统教育</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">自我利益</h4>
                    <p className="text-sm text-slate-600">追随让你兴奋的事，而非服务组织</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">自我独立</h4>
                    <p className="text-sm text-slate-600">不把判断力外包给他人</p>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Quote Card */}
          <BentoCard colSpan={2} className="bg-gradient-to-br from-amber-50/80 to-orange-50/80">
            <Quote className="w-8 h-8 text-amber-500 mb-4" />
            <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
              "一个人如果一辈子只做极少数重复操作，最终会变得愚蠢而无知。"
            </blockquote>
            <cite className="block mt-4 text-sm text-slate-500 not-italic">— 亚当·斯密</cite>
          </BentoCard>

          {/* Path Comparison */}
          <BentoCard rowSpan={2} className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80">
            <Tag color="emerald">两条路径</Tag>
            <h3 className="text-xl font-bold text-slate-900 mt-4 mb-4">成长型 vs 技能型</h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/60 border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-slate-900">成长型 ⭐ 推荐</span>
                </div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• 追求自己的目标（品牌）</li>
                  <li>• 分享学习过程（内容）</li>
                  <li>• 帮别人更快到达（产品）</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-2xl bg-slate-50/60 border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-5 h-5 text-slate-500" />
                  <span className="font-semibold text-slate-700">技能型</span>
                </div>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• 学一门技能</li>
                  <li>• 教这门技能</li>
                  <li>• 卖相关产品</li>
                </ul>
                <p className="text-xs text-slate-400 mt-2">容易变成"第二份9-5"</p>
              </div>
            </div>
          </BentoCard>

          {/* Four Themes */}
          <BentoCard>
            <Tag color="violet">四大主题</Tag>
            <h3 className="text-lg font-bold text-slate-900 mt-3 mb-3">永恒的创作方向</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-center">
                <span className="text-2xl">💪</span>
                <p className="text-sm font-medium text-rose-700 mt-1">健康</p>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
                <span className="text-2xl">💰</span>
                <p className="text-sm font-medium text-amber-700 mt-1">财富</p>
              </div>
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-center">
                <span className="text-2xl">❤️</span>
                <p className="text-sm font-medium text-blue-700 mt-1">关系</p>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                <span className="text-2xl">😊</span>
                <p className="text-sm font-medium text-emerald-700 mt-1">幸福</p>
              </div>
            </div>
          </BentoCard>

          {/* Attention Economy */}
          <BentoCard className="bg-gradient-to-br from-rose-50/80 to-pink-50/80">
            <TrendingUp className="w-8 h-8 text-rose-500 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">注意力是最稀缺的护城河</h3>
            <p className="text-sm text-slate-600">
              当任何人都能写内容、做软件时，谁能赢？<br/>
              <span className="font-semibold text-rose-600">被人看见的那一个。</span>
            </p>
          </BentoCard>

          {/* Swipe File */}
          <BentoCard colSpan={2} className="bg-gradient-to-br from-violet-50/80 to-purple-50/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-violet-600" />
              </div>
              <div className="flex-1">
                <Tag color="violet">核心方法</Tag>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">建立「想法博物馆」</h3>
                <p className="text-slate-600 mb-4">
                  Swipe File 是你大脑的「外挂存储」——平时「采蜜」，创作时「取蜜」。
                  任何让你觉得"有用"的想法，立刻记下来。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/60 text-sm text-slate-600 border border-violet-100">金句/观点</span>
                  <span className="px-3 py-1 rounded-full bg-white/60 text-sm text-slate-600 border border-violet-100">内容结构</span>
                  <span className="px-3 py-1 rounded-full bg-white/60 text-sm text-slate-600 border border-violet-100">故事框架</span>
                  <span className="px-3 py-1 rounded-full bg-white/60 text-sm text-slate-600 border border-violet-100">选题角度</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Content Creation */}
          <BentoCard rowSpan={2}>
            <Compass className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-3">内容 = 新颖的视角</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-sm font-semibold text-slate-700">步骤 1</span>
                <p className="text-sm text-slate-600">建立「想法博物馆」随时记录</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-sm font-semibold text-slate-700">步骤 2</span>
                <p className="text-sm text-slate-600">追求「想法密度」3-5个高信噪比来源</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-sm font-semibold text-slate-700">步骤 3</span>
                <p className="text-sm text-slate-600">一个想法，千种写法</p>
              </div>
            </div>
          </BentoCard>

          {/* Brand Definition */}
          <BentoCard colSpan={2} className="bg-gradient-to-br from-cyan-50/80 to-sky-50/80">
            <Users className="w-8 h-8 text-cyan-500 mb-3" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">品牌不是头像，是一个「环境」</h3>
            <p className="text-slate-600 mb-4">
              品牌是你邀请别人进入的小世界。不是第一次点进主页的感觉，
              而是<span className="font-semibold text-cyan-600">关注你3-6个月后，他们脑子里留下的东西。</span>
            </p>
            <div className="flex items-center gap-2 text-sm text-cyan-700">
              <span>你的故事</span>
              <ArrowRight className="w-4 h-4" />
              <span>世界观</span>
              <ArrowRight className="w-4 h-4" />
              <span>人生哲学</span>
            </div>
          </BentoCard>

          {/* System Economy */}
          <BentoCard colSpan={2} className="bg-gradient-to-br from-indigo-50/80 to-blue-50/80">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                <Layers className="w-5 h-5 text-indigo-600" />
              </div>
              <Tag color="blue">终极形态</Tag>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">系统才是新的产品</h3>
            <p className="text-slate-600 mb-4">
              我们正处于「系统经济」时代。人们不想要「问题的解决方案」，
              他们想要<span className="font-semibold text-indigo-600">你的解决方案</span>——
              基于你真实经验的系统。
            </p>
            <div className="p-4 rounded-xl bg-white/60 border border-indigo-100">
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Dan Koe 的例子：</span>
                2 Hour Writer 系统——从内容创意枯竭到每天2小时内完成所有内容，
                最终形成跨平台复用的创作流水线。
              </p>
            </div>
          </BentoCard>

          {/* Final Quote */}
          <BentoCard colSpan={2} className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
              "多兴趣不是问题，<span className="text-blue-300">没有容器</span>，才是问题。"
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <div>
                <p className="font-semibold">核心行动</p>
                <p className="text-sm text-slate-400">把自己变成"容器"，将所有兴趣汇聚成有价值的工作</p>
              </div>
            </div>
          </BentoCard>

          {/* Action Items */}
          <BentoCard colSpan={2} rowSpan={1}>
            <h3 className="text-lg font-bold text-slate-900 mb-4">立即行动清单</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <p className="text-sm text-slate-600">开始「公开记笔记」</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <p className="text-sm text-slate-600">建立「想法博物馆」</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <p className="text-sm text-slate-600">找到3-5个高信噪比来源</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <p className="text-sm text-slate-600">拆解喜欢的内容结构</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                <p className="text-sm text-slate-600">用一个想法练习多种写法</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                <p className="text-sm text-slate-600">构建自己的创作系统</p>
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="px-6 py-8 text-center"
      >
        <p className="text-sm text-slate-500">
          基于 Dan Koe 视频《如果你有多个兴趣，不要浪费未来2-3年》整理
        </p>
        <p className="text-xs text-slate-400 mt-2">
          不要让未来的自己后悔 —— 开始行动
        </p>
      </motion.footer>
    </div>
  );
}

export default App;
