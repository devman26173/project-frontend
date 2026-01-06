import React, { useState } from 'react';
import { ChevronLeft, Search, MoreVertical, Edit } from 'lucide-react';

export default function RestaurantBoard() {
  const [posts] = useState([
    {
      id: 1,
      title: '六本木で本格アメリカンBBQ🍖',
      description: 'お肉がホロホロでボリューム満点！スモーキーな香りが食欲をそそります。大人数での飲み会にも最高✨',
      date: '10.24',
      location: '港区 六本木',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400'
    },
    {
      id: 2,
      title: '恵比寿の絶品パエリアランチ🇪🇸',
      description: '本格的なスペイン料理が楽しめるお店。魚介の旨味が凝縮されたパエリアは絶対に食べてほしい一品です！',
      date: '10.24',
      location: '渋谷区 恵比寿',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'
    },
    {
      id: 3,
      title: '中目黒のお洒落な薪窯ピザ🍕',
      description: '生地がモチモチで香ばしい！本格的なナポリピザが楽しめます。デートや女子会にもおすすめの雰囲気。',
      date: '10.24',
      location: '目黒区 中目黒',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'
    },
    {
      id: 4,
      title: '表参道で見つけたヘルシーポケ丼🥗',
      description: '新鮮なマグロとアボカドがたっぷり！トッピングも選べて、ダイエット中やランチにぴったりなポケボウルです。',
      date: '10.24',
      location: '渋谷区 神宮前',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
    }
  ]);

  return (
    <div className="w-full max-w-[480px] mx-auto bg-white min-h-screen flex flex-col" lang="ja">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-white sticky top-0 z-10">
        <button className="p-2 -ml-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center">
          <div className="font-bold text-base">グルメ掲示板</div>
          <button className="text-xs text-gray-600 flex items-center gap-0.5 mt-0.5">
            東京
            <span className="text-[10px]">▼</span>
          </button>
        </div>
        <div className="flex gap-1">
          <button className="p-2">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 -mr-2">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search Box */}
      <div className="px-4 py-3">
        <div className="bg-gray-100 rounded-lg px-3 py-2.5 flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder=""
            className="bg-transparent flex-1 outline-none text-sm placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Notice Section */}
      <div className="bg-blue-50 border-y border-blue-100">
        <div className="px-4 py-3 flex items-center gap-2">
          <div className="bg-blue-500 text-white text-[11px] font-bold px-2 py-0.5 rounded flex-shrink-0">
            お知らせ
          </div>
          <div className="text-sm text-gray-800 truncate">
            グルメ掲示板ご利用方法とルール
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="flex-1 bg-white">
        {posts.map((post, index) => (
          <div key={post.id} className="border-b border-gray-200 px-4 py-4">
            <div className="flex gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base leading-tight mb-1.5 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2.5 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center flex-wrap gap-1.5 text-xs text-gray-500">
                  {index === 0 && (
                    <>
                      <span className="text-red-500">❤️ 0</span>
                      <span>💬 0</span>
                      <span className="bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded text-[11px] whitespace-nowrap">
                        人気最高+1
                      </span>
                    </>
                  )}
                  <span className="whitespace-nowrap">{post.date}</span>
                  <span className="text-gray-300">|</span>
                  <span className="truncate">{post.location}</span>
                </div>
              </div>
              <img 
                src={post.image} 
                alt={post.title}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Write Button */}
      <button className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-full pl-4 pr-3 py-2.5 shadow-lg flex items-center gap-1.5 active:bg-yellow-500 transition-colors">
        <span className="text-sm font-medium whitespace-nowrap">投稿する</span>
        <Edit className="w-4 h-4" />
      </button>
    </div>
  );
}