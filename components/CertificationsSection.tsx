import React, { useState, useMemo } from 'react';
import { CERTIFICATIONS } from '../constants';
import { ExternalLink, Award, Calendar, Hash, FileText, X, ZoomIn, Briefcase, Trophy, Sparkles, PieChart, Activity } from 'lucide-react';
import { Certification, CertificationCategory } from '../types';

const CertificationsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<CertificationCategory | 'All'>('All');
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
    const [showInsights, setShowInsights] = useState(false);

    const tabs: (CertificationCategory | 'All')[] = ['All', 'Certification', 'Internship', 'Event'];

    const filteredCerts = activeTab === 'All'
        ? CERTIFICATIONS
        : CERTIFICATIONS.filter(c => c.category === activeTab);

    const getCategoryIcon = (cat: CertificationCategory) => {
        switch (cat) {
            case 'Internship': return <Briefcase size={14} />;
            case 'Event': return <Trophy size={14} />;
            default: return <Award size={14} />;
        }
    };

    const stats = useMemo(() => {
        const total = CERTIFICATIONS.length;
        const byCategory = CERTIFICATIONS.reduce((acc, curr) => {
            acc[curr.category] = (acc[curr.category] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const issuers = [...new Set(CERTIFICATIONS.map(c => c.issuer))].length;
        const years = [...new Set(CERTIFICATIONS.map(c => {
            const match = c.date.match(/\d{4}/);
            return match ? match[0] : 'N/A';
        }))].sort();

        return { total, byCategory, issuers, years };
    }, []);

    return (
        <section id="certifications" className="py-24 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Clickable Header for Analytics */}
                <div
                    className="text-center mb-12 cursor-pointer group relative inline-block w-full select-none"
                    onClick={() => setShowInsights(true)}
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 -m-4 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
                        Certifications & Achievements
                        <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Validated expertise through professional certifications, internship completions, and event participation.
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Activity size={14} />
                        Click to View AI Insights
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-2 mb-12 flex-wrap">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 ${activeTab === tab
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                                }`}
                        >
                            {tab === 'All' ? 'All Documents' : tab + 's'}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
                    {filteredCerts.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
                            onClick={() => setSelectedCert(cert)}
                        >
                            {/* Top Color Bar */}
                            <div className={`h-2 w-full ${cert.category === 'Internship' ? 'bg-emerald-500' :
                                    cert.category === 'Event' ? 'bg-orange-500' : 'bg-blue-600'
                                }`} />

                            <div className="p-6 flex-grow flex flex-col">
                                {/* Header: Logo & Category Badge */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-slate-50 dark:bg-slate-800 p-2 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                                        {cert.logo ? (
                                            <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                                        ) : (
                                            <Award className="text-slate-400" />
                                        )}
                                    </div>
                                    <span className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${cert.category === 'Internship'
                                            ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30'
                                            : cert.category === 'Event'
                                                ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-900/30'
                                                : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/30'
                                        }`}>
                                        {getCategoryIcon(cert.category)}
                                        {cert.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-slate-900 dark:text-white mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-6 line-clamp-1">
                                    {cert.issuer}
                                </p>

                                {/* Metadata Footer */}
                                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2 text-xs text-slate-500 dark:text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-slate-400" />
                                        <span>{cert.date}</span>
                                    </div>
                                    {cert.credentialId && (
                                        <div className="flex items-center gap-2 font-mono">
                                            <Hash size={14} className="text-slate-400" />
                                            <span className="truncate max-w-[200px]" title={cert.credentialId}>{cert.credentialId}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Hover Action Overlay */}
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 dark:group-hover:bg-blue-900/10 transition-colors pointer-events-none" />
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-600/30">
                                    <FileText size={14} />
                                    View Certificate
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Document Viewer Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
                    <div
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in"
                        onClick={() => setSelectedCert(null)}
                    />

                    <div className="relative w-full max-w-4xl bg-transparent flex flex-col h-[90vh] animate-in zoom-in-95 duration-300">
                        {/* Toolbar */}
                        <div className="flex items-center justify-between mb-4 text-white px-2">
                            <div>
                                <h3 className="font-bold text-lg">{selectedCert.title}</h3>
                                <p className="text-sm text-slate-400">{selectedCert.issuer} • {selectedCert.date}</p>
                            </div>
                            <div className="flex gap-2">
                                {selectedCert.url && (
                                    <a
                                        href={selectedCert.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md"
                                        title="Open External Link"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 bg-white/10 hover:bg-red-500/50 rounded-full transition-colors backdrop-blur-md"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Document Area */}
                        <div className="flex-grow bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative flex items-center justify-center group">
                            {selectedCert.image ? (
                                selectedCert.image.toLowerCase().endsWith('.pdf') ? (
                                    <iframe
                                        src={`${selectedCert.image}#toolbar=0&navpanes=0&scrollbar=0`}
                                        className="w-full h-full border-0"
                                        title="Certificate PDF"
                                    />
                                ) : (
                                    <img
                                        src={selectedCert.image}
                                        alt="Certificate Preview"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                )
                            ) : (
                                <div className="text-center p-10">
                                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FileText size={40} className="text-slate-600" />
                                    </div>
                                    <p className="text-slate-400">No preview image available.</p>
                                </div>
                            )}

                            {/* Zoom Hint */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-2">
                                <ZoomIn size={12} />
                                Pinch or scroll to zoom (simulated)
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Insights Modal */}
            {showInsights && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
                    <div
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-in fade-in"
                        onClick={() => setShowInsights(false)}
                    />

                    <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 border border-slate-200 dark:border-slate-800 max-h-[90vh]">

                        {/* Header */}
                        <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/50">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <Sparkles className="text-blue-500" />
                                    Achievement Analytics
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">AI-Generated Analysis of Professional Growth</p>
                            </div>
                            <button
                                onClick={() => setShowInsights(false)}
                                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors"
                            >
                                <X size={24} className="text-slate-500" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8 overflow-y-auto">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {[
                                    { label: 'Total Credentials', value: stats.total, icon: <Award className="text-blue-500" /> },
                                    { label: 'Internships', value: stats.byCategory['Internship'] || 0, icon: <Briefcase className="text-emerald-500" /> },
                                    { label: 'Issuing Orgs', value: stats.issuers, icon: <FileText className="text-purple-500" /> },
                                    { label: 'Active Years', value: stats.years.length, icon: <Calendar className="text-orange-500" /> },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                                        <div className="mb-2 p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">{stat.icon}</div>
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Visualizations */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Distribution Chart */}
                                <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <PieChart size={18} className="text-blue-500" />
                                        Category Distribution
                                    </h4>
                                    <div className="space-y-5">
                                        {Object.entries(stats.byCategory).map(([cat, count]) => (
                                            <div key={cat}>
                                                <div className="flex justify-between text-sm mb-1.5">
                                                    <span className="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                                        <span className={`w-2 h-2 rounded-full ${cat === 'Internship' ? 'bg-emerald-500' :
                                                                cat === 'Event' ? 'bg-orange-500' : 'bg-blue-600'
                                                            }`}></span>
                                                        {cat}
                                                    </span>
                                                    <span className="text-slate-500 font-mono">{Math.round(((count as number) / stats.total) * 100)}%</span>
                                                </div>
                                                <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-1000 ease-out ${cat === 'Internship' ? 'bg-emerald-500' :
                                                                cat === 'Event' ? 'bg-orange-500' : 'bg-blue-600'
                                                            }`}
                                                        style={{ width: `${((count as number) / stats.total) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* AI Insights Text */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>

                                    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center gap-2 relative z-10">
                                        <Sparkles size={18} />
                                        AI Assessment
                                    </h4>
                                    <div className="space-y-4 relative z-10">
                                        <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
                                            Youssef demonstrates a strong commitment to continuous learning, with a heavy emphasis on <strong>AI & Machine Learning</strong> (4 dedicated certs) and <strong>Cloud Technologies</strong> (AWS, DataCamp).
                                        </p>
                                        <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
                                            His profile is well-balanced between theoretical knowledge and practical application, evidenced by <strong>{stats.byCategory['Internship'] || 0} internships</strong> in diverse environments, ranging from Telecom to Manufacturing.
                                        </p>
                                        <div className="p-3 bg-white/60 dark:bg-slate-900/40 rounded-xl border border-blue-100 dark:border-blue-800/50 text-xs font-medium text-blue-800 dark:text-blue-200">
                                            <strong className="block mb-1 uppercase tracking-wider text-blue-600 dark:text-blue-400">Key Trend</strong>
                                            A clear progression from foundational Web Development (2021-2023) towards specialized AI/ML and IoT Engineering (2025), aligning perfectly with modern industry demands.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 text-center">
                            <button
                                onClick={() => setShowInsights(false)}
                                className="px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                Close Analysis
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CertificationsSection;