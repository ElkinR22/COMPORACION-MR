import React from 'react';

export function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'income', label: 'Income', icon: 'file-search' },
    { id: 'expenses', label: 'Expenses', icon: 'users' },
    { id: 'balance', label: 'Balance Sheet', icon: 'briefcase' },
    { id: 'cashflow', label: 'Cash Flow', icon: 'bar-chart-3' },
    { id: 'accounting', label: 'Accounting', icon: 'settings' },
    { id: 'reports', label: 'Reports', icon: 'settings' },
    { id: 'costcenter', label: 'Cost Center', icon: 'settings' },
    { id: 'clients', label: 'Clients/Suppliers', icon: 'settings' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <aside className="w-64 glass-strong shadow-2xl">
        <div className="p-6 border-b border-white/20">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <i data-lucide="brain-circuit" className="w-6 h-6 text-white"></i>
                </div>
                <div>
                    <h1 className="text-lg font-semibold text-gray-800">Finanzas Pro</h1>
                    <p className="text-xs text-gray-600">AI-Powered</p>
                </div>
            </div>
        </div>

        <nav className="p-4 space-y-2">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all-smooth hover:bg-white/20 ${activeTab === item.id ? 'bg-white/20' : ''}`}
                >
                    <i data-lucide={item.icon} className="w-5 h-5"></i>
                    <span>{item.label}</span>
                </button>
            ))}
        </nav>
    </aside>
  );
}
