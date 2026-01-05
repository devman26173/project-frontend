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
    <div className="max-w-md mx-auto bg-white h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <button className="p-1">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center">
          <div className="font-bold text-lg">グルメ掲示板</div>
          <button className="text-sm text-gray-600 flex items-center gap-1 mt-0.5">
            東京
            <span className="text-xs">▼</span>
          </button>
        </div>
        <div className="flex gap-2">
          <button className="p-1">
            <Search className="w-6 h-6" />
          </button>
          <button className="p-1">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Search Box */}
      <div className="p-4">
        <div className="bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="グルメ掲示板 登録レストラン"
            className="bg-transparent flex-1 outline-none text-sm"
          />
        </div>
      </div>

      {/* Notice Section */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="p-4 flex items-center gap-3">
          <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
            お知らせ
          </div>
          <div className="text-sm text-gray-800">
            グルメ掲示板ご利用方法とルール
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="flex-1 overflow-y-auto">
        {posts.map((post, index) => (
          <div key={post.id} className="border-b">
            <div className="p-4 flex gap-3">
              <div className="flex-1">
                <div className="font-extrabold text-xl mb-2">{post.title}</div>
                <div className="text-gray-600 text-sm mb-3">{post.description}</div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  {index === 0 && (
                    <>
                      <span className="text-red-500">❤️ 0</span>
                      <span>💬 0</span>
                      <span className="bg-gray-200 px-2 py-0.5 rounded">人気最高+1</span>
                    </>
                  )}
                  <span>{post.date}</span>
                  <span>|</span>
                  <span>{post.location}</span>
                </div>
              </div>
              <img 
                src={post.image} 
                alt={post.title}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Write Button */}
      <button className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-full px-5 py-3 shadow-lg flex items-center gap-2">
        <span className="text-sm font-medium">投稿する</span>
        <Edit className="w-5 h-5" />
      </button>
    </div>
  );
}