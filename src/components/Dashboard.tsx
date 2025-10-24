import { TrendingUp, ShoppingBag, Package, Star, DollarSign, ArrowUp, ArrowDown } from 'lucide-react';
import { dashboardStats, salesData, products } from '../data/mockData';

export function Dashboard() {
  const stats = [
    {
      label: 'Total Revenue',
      value: `$${dashboardStats.totalRevenue.toLocaleString()}`,
      change: `+${dashboardStats.revenueGrowth}%`,
      isPositive: true,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600'
    },
    {
      label: 'Total Orders',
      value: dashboardStats.totalOrders.toLocaleString(),
      change: `+${dashboardStats.orderGrowth}%`,
      isPositive: true,
      icon: ShoppingBag,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      label: 'Products',
      value: dashboardStats.totalProducts.toString(),
      change: 'Active',
      isPositive: true,
      icon: Package,
      color: 'from-purple-500 to-pink-600'
    },
    {
      label: 'Avg Rating',
      value: dashboardStats.avgRating.toFixed(1),
      change: 'Excellent',
      isPositive: true,
      icon: Star,
      color: 'from-orange-500 to-yellow-600'
    }
  ];

  const maxSales = Math.max(...salesData.map(d => d.sales));
  const topProducts = [...products]
    .sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
    .slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change.startsWith('+') || stat.change.startsWith('-') ? (
                    <>
                      {stat.isPositive ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )}
                      {stat.change}
                    </>
                  ) : (
                    <span className="text-gray-500">{stat.change}</span>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Sales Overview</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <TrendingUp className="w-4 h-4" />
              Last 7 months
            </div>
          </div>

          <div className="space-y-4">
            {salesData.map((data, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="font-medium text-gray-700">{data.month}</span>
                  <span className="font-bold text-gray-900">
                    ${(data.sales / 1000).toFixed(0)}k
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${(data.sales / maxSales) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {data.orders} orders
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Top Products</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              By popularity
            </div>
          </div>

          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={product.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm truncate">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600 ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {product.reviews} reviews
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">${product.price}</div>
                  {product.trending && (
                    <span className="text-xs text-orange-600 font-medium">
                      🔥 Hot
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-lg">Growth Rate</h4>
          </div>
          <div className="text-3xl font-bold mb-2">12.5%</div>
          <p className="text-blue-100 text-sm">Monthly average increase</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-lg">Conversion</h4>
          </div>
          <div className="text-3xl font-bold mb-2">3.2%</div>
          <p className="text-green-100 text-sm">Visitor to customer rate</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-lg">Satisfaction</h4>
          </div>
          <div className="text-3xl font-bold mb-2">96%</div>
          <p className="text-purple-100 text-sm">Customer satisfaction rate</p>
        </div>
      </div>
    </div>
  );
}
