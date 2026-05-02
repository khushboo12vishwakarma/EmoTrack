
// // import React from 'react';
// // import { Brain, CheckCircle, XCircle, Lightbulb, Music, Wind, Video, Heart, MessageSquare, Quote, Star, Zap, FileText, BarChart3 } from 'lucide-react';

// // const ProfessionalSuggestion = ({ suggestion }) => {
// //   // Don't render if no suggestion at all
// //   if (!suggestion || suggestion.trim() === '') {
// //     return null;
// //   }

// //   // ULTIMATE parsing function for ALL your database formats
// //   const parseAISuggestion = (text) => {
// //     const sections = {
// //       dos: [],
// //       donts: [],
// //       tips: [],
// //       quotes: [],
// //       reflections: [],
// //       music: [],
// //       breathing: [],
// //       meditation: [],
// //       empathy: [],
// //       tracker: null,
// //       closingMessage: null
// //     };


    
    
// //     // Handle "No suggestions found" case
// //     if (text.toLowerCase().includes('no suggestions found')) {
// //       sections.closingMessage = 'No suggestions found.';
// //     }
    
// //     // Clean the text - remove markdown formatting
// //     const cleanText = text.replace(/\*\*/g, ''); // Remove markdown bold
// //     const lines = cleanText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
// //     let i = 0;
// //     while (i < lines.length) {
// //       const line = lines[i].toLowerCase();
// //       const originalLine = lines[i];
      
// //       // Extract Recovery Tracker - Handle FIRST (highest priority)
// //       if (originalLine.includes('🕊️')) {
// //         sections.tracker = originalLine.replace(/🕊️\s*/, '');
// //         i++;
// //         continue;
// //       }
      
// //       // Extract Do's - Multiple format support (including AI-generated recommendations)
// //       if ((line.includes('✅') && (line.includes('do') || line.includes('recommended'))) || 
// //           line.startsWith('do\'s:') || 
// //           line.startsWith('dos:') ||
// //           line.includes('✅ be clear about what you want')) {
        
// //         i++; // Move to next line after header
        
// //         while (i < lines.length) {
// //           const currentLine = lines[i].trim();
// //           const lowerCurrentLine = currentLine.toLowerCase();
          
// //           // Stop conditions - check for next section headers
// //           if (lowerCurrentLine.includes('❌') || 
// //               lowerCurrentLine.includes('don\'t') ||
// //               lowerCurrentLine.includes('### ❌') ||
// //               lowerCurrentLine.includes('---') ||
// //               lowerCurrentLine.includes('tip of the day') ||
// //               lowerCurrentLine.includes('motivational quote') ||
// //               lowerCurrentLine.includes('journaling prompt') ||
// //               lowerCurrentLine.includes('music for relaxation') ||
// //               lowerCurrentLine.includes('🌧️') ||
// //               lowerCurrentLine.includes('🌬') ||
// //               lowerCurrentLine.includes('🧘') ||
// //               lowerCurrentLine.includes('💡') ||
// //               lowerCurrentLine.includes('🌟') ||
// //               lowerCurrentLine.includes('📝') ||
// //               lowerCurrentLine.includes('💬') ||
// //               lowerCurrentLine.includes('🎧') ||
// //               lowerCurrentLine.includes('🕊️') ||
// //               (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('quote')) ||
// //               (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('tip'))) {
// //             break;
// //           }
          
// //           // Extract various Do's formats
// //           if (currentLine.startsWith('-') || 
// //               currentLine.startsWith('•') || 
// //               /^\d+\./.test(currentLine) ||
// //               currentLine.startsWith('✅') ||
// //               currentLine.startsWith("✅ Do's") ||
// //               currentLine.includes('AI-generated actionable recommendation') ||
// //               currentLine.includes('**AI-generated actionable recommendation') ||
// //               currentLine.includes('[AI-generated actionable recommendation') ||
// //               currentLine.includes('**Meditation or Breathing Exercise**') ||
// //               currentLine.includes('**Deep Breathing Practice**') ||
// //               currentLine.includes('**Journaling**') ||
// //               currentLine.includes('Journaling prompt:') ||
// //               currentLine.includes('50-minute meditation break') ||
// //               currentLine.includes('30–45 minute breathing exercises')) {
            
// //             let doItem = currentLine
// //               .replace(/^[-•]\s*/, '')
// //               .replace(/^\d+\.\s*/, '')
// //               .replace(/^✅\s*/, '')
// //               .replace(/AI-generated actionable recommendation \d+[:\]]*\s*/gi, '')
// //               .replace(/\*\*AI-generated actionable recommendation \d+\*\*:\s*/gi, '')
// //               .replace(/\[AI-generated actionable recommendation \d+\]:\s*/gi, '')
// //               .replace(/Journaling prompt:\s*/gi, '')
// //               .replace(/\*\*(.*?)\*\*:/g, '$1:');
            
// //             if (doItem.length > 5) {
// //               sections.dos.push(doItem);
// //             }
// //           }
// //           i++;
// //         }
// //         continue;
// //       }
      
// //       // Extract Don'ts - Multiple format support
// //       if ((line.includes('❌') && line.includes('don')) || 
// //           line.startsWith('don\'ts:') || 
// //           line.startsWith('donts:') ||
// //           line.startsWith("❌ Don'ts") ||
// //           line.includes('### ❌ don\'ts') ||
// //           line.includes('**❌ don\'ts**')) {
        
// //         i++; // Move to next line after header
        
// //         while (i < lines.length) {
// //           const currentLine = lines[i].trim();
// //           const lowerCurrentLine = currentLine.toLowerCase();
          
// //           // Stop conditions
// //           if (lowerCurrentLine.includes('---') ||
// //               lowerCurrentLine.includes('tip of the day') ||
// //               lowerCurrentLine.includes('motivational quote') ||
// //               lowerCurrentLine.includes('journaling prompt') ||
// //               lowerCurrentLine.includes('music for relaxation') ||
// //               lowerCurrentLine.includes('💡') ||
// //               lowerCurrentLine.includes('🌟') ||
// //               lowerCurrentLine.includes('📝') ||
// //               lowerCurrentLine.includes('💬') ||
// //               lowerCurrentLine.includes('🎧') ||
// //               lowerCurrentLine.includes('🌧️') ||
// //               lowerCurrentLine.includes('🌬') ||
// //               lowerCurrentLine.includes('🧘') ||
// //               lowerCurrentLine.includes('🕊️') ||
// //               (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('quote')) ||
// //               (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('tip'))) {
// //             break;
// //           }
          
// //           if (currentLine.startsWith('-') || 
// //               currentLine.startsWith('•') || 
// //               /^\d+\./.test(currentLine) ||
// //               currentLine.includes('AI-generated thing to avoid') ||
// //               currentLine.includes('**AI-generated thing to avoid') ||
// //               currentLine.includes('[AI-generated thing to avoid')) {
            
// //             let dontItem = currentLine
// //               .replace(/^[-•]\s*/, '')
// //               .replace(/^\d+\.\s*/, '')
// //               .replace(/AI-generated thing to avoid \d+[:\]]*\s*/gi, '')
// //               .replace(/\*\*AI-generated thing to avoid \d+\*\*:\s*/gi, '')
// //               .replace(/\[AI-generated thing to avoid \d+\]:\s*/gi, '');
            
// //             if (dontItem.length > 5) {
// //               sections.donts.push(dontItem);
// //             }
// //           }
// //           i++;
// //         }
// //         continue;
// //       }
      
// //       // Extract Tips - Multiple formats
// //       if ((line.includes('💡') && line.includes('tip')) ||
// //           line.includes('**tip of the day**') ||
// //           line.includes('tip of the day:') ||
// //           line.includes('### 💡 tip of the day') ||
// //           line.includes('- 💡 tip of the day')) {
        
// //         let tipContent = originalLine
// //           .replace(/💡\s*/gi, '')
// //           .replace(/\*\*tip of the day\*\*:?\s*/gi, '')
// //           .replace(/tip of the day:?\s*/gi, '')
// //           .replace(/### 💡 tip of the day:?\s*/gi, '')
// //           .replace(/- 💡 tip of the day:?\s*/gi, '')
// //           .replace(/^["""']/, '')
// //           .replace(/["""']$/, '');
        
// //         if (tipContent.length > 10) {
// //           sections.tips.push(tipContent.trim());
// //         }
// //         i++;
// //         continue;
// //       }
      
// //       // Extract Quotes - Multiple formats
// //       if ((line.includes('💡') && line.includes('quote')) ||
// //           (line.includes('💬') && line.includes('quote')) ||
// //           line.includes('**motivational quote**') ||
// //           line.includes('💡motivational quote:*') ||
// //           line.includes('motivational quote:') ||
// //           line.includes('motational quote:') ||
// //           line.includes('### 💬 motivational quote')) {
        
// //         let quoteContent = originalLine
// //           .replace(/💡\s*/gi, '')
// //           .replace(/💬\s*/gi, '')
// //           .replace(/\*\*motivational quote\*\*:?\s*/gi, '')
// //           .replace(/mo[tv]ational quote:?\s*/gi, '')
// //           .replace(/### 💬 motivational quote:?\s*/gi, '')
// //           .replace(/^["""'*]/, '')
// //           .replace(/["""'*]$/, '');
        
// //         if (quoteContent.length > 10) {
// //           sections.quotes.push(quoteContent.trim());
// //         }
// //         i++;
// //         continue;
// //       }
      
// //       // Extract Journaling Prompts - Multiple formats
// //       if ((line.includes('🌟') && line.includes('journaling')) ||
// //           (line.includes('📝') && line.includes('journaling')) ||
// //           line.includes('journaling prompt:') ||
// //           line.includes('**journaling prompt**') ||
// //           line.includes('### 📝 journaling prompt') ||
// //           line.includes('📊 reflection question')) {
        
// //         let reflectionContent = originalLine
// //           .replace(/🌟\s*/gi, '')
// //           .replace(/📝\s*/gi, '')
// //           .replace(/📊\s*/gi, '')
// //           .replace(/journaling prompt:?\s*/gi, '')
// //           .replace(/\*\*journaling prompt\*\*:?\s*/gi, '')
// //           .replace(/### 📝 journaling prompt:?\s*/gi, '')
// //           .replace(/reflection question:?\s*/gi, '')
// //           .replace(/^["""'*]/, '')
// //           .replace(/["""'*]$/, '');
        
// //         if (reflectionContent.length > 10) {
// //           sections.reflections.push(reflectionContent.trim());
// //         }
// //         i++;
// //         continue;
// //       }
      
// //       // Extract Music - Multiple formats
// //       if ((line.includes('🌧️') && line.includes('music')) ||
// //           (line.includes('🎧') && line.includes('music')) ||
// //           line.includes('music for relaxation:') ||
// //           line.includes('**music for relaxation**') ||
// //           line.includes('### 🎧 music for relaxation')) {
        
// //         let musicContent = originalLine
// //           .replace(/🌧️\s*/gi, '')
// //           .replace(/🎧\s*/gi, '')
// //           .replace(/music for relaxation:?\s*/gi, '')
// //           .replace(/\*\*music for relaxation\*\*:?\s*/gi, '')
// //           .replace(/### 🎧 music for relaxation:?\s*/gi, '');
        
// //         if (musicContent.length > 10) {
// //           sections.music.push(musicContent.trim());
// //         }
// //         i++;
// //         continue;
// //       }
      
// //       // Extract Breathing Exercise
// //       if ((line.includes('🌬') && line.includes('breathing')) ||
// //           line.includes('breathing exercise:') ||
// //           line.includes('**breathing exercise**') ||
// //           line.includes('### 🌬 breathing exercise')) {
        
// //         let breathingContent = originalLine
// //           .replace(/🌬\s*/gi, '')
// //           .replace(/breathing exercise:?\s*/gi, '')
// //           .replace(/\*\*breathing exercise\*\*:?\s*/gi, '')
// //           .replace(/### 🌬 breathing exercise:?\s*/gi, '');
        
// //         if (breathingContent.length > 10) {
// //           sections.breathing.push(breathingContent.trim());
// //         }
// //         i++;
// //         continue;
// //       }
      
// //       // Extract Meditation
// //       if ((line.includes('🧘') && line.includes('meditation')) ||
// //           line.includes('meditation exercise:') ||
// //           line.includes('meditation video:') ||
// //           line.includes('**meditation exercise**') ||
// //           line.includes('### 🧘 meditation video')) {
        
// //         let meditationContent = originalLine
// //           .replace(/🧘\s*/gi, '')
// //           .replace(/meditation (exercise|video):?\s*/gi, '')
// //           .replace(/\*\*meditation exercise\*\*:?\s*/gi, '')
// //           .replace(/### 🧘 meditation video:?\s*/gi, '');
        
// //         if (meditationContent.length > 10) {
// //           sections.meditation.push(meditationContent.trim());
// //         }
// //         i++;
// //         continue;
// //       }
      
// //       // Extract Empathetic Messages - Multiple formats
// //       if (line.includes('empathetic closing message') ||
// //           (line.includes('🌟') && line.includes('message')) ||
// //           line.includes('**closing message**')) {
        
// //         let empathyContent = originalLine
// //           .replace(/🌟\s*/gi, '')
// //           .replace(/empathetic closing message:?\s*/gi, '')
// //           .replace(/\*\*closing message\*\*:?\s*/gi, '')
// //           .replace(/^["""']/, '')
// //           .replace(/["""']$/, '');
        
// //         if (empathyContent.length > 10) {
// //           sections.empathy.push(empathyContent.trim());
// //         }
// //         i++;
// //         continue;
// //       }
      
// //       i++;
// //     }
    
// //     return sections;
// //   };

// //   const sections = parseAISuggestion(suggestion);

// //   // Check if we have any meaningful content
// //   const hasMainContent = sections.dos.length > 0 || sections.donts.length > 0 || 
// //                         sections.tips.length > 0 || sections.quotes.length > 0 || 
// //                         sections.reflections.length > 0 || sections.music.length > 0 || 
// //                         sections.breathing.length > 0 || sections.meditation.length > 0 ||
// //                         sections.empathy.length > 0;

// //   // If we only have tracker message and nothing else, render minimal component
// //   if (!hasMainContent && sections.tracker) {
// //     return (
// //       <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white max-w-4xl mx-auto">
// //         <div className="flex items-center gap-3">
// //           <Heart className="w-6 h-6 text-pink-300" />
// //           <div>
// //             <h3 className="text-lg font-semibold">Recovery Tracker Active</h3>
// //             <p className="text-blue-100 text-sm">{sections.tracker}</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }


// //   // If no valid content at all, show empathetic closing message
// // if (!hasMainContent && !sections.tracker) {
// //   return (
// //     <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-200">
// //       <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
// //         <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-3 rounded-full">
// //           <Brain className="w-8 h-8 text-white" />
// //         </div>
// //         <div>
// //           <h2 className="text-2xl font-bold text-gray-800">AI Therapist Suggestion</h2>
// //           <p className="text-sm text-gray-600">Professional guidance based on your emotional analysis</p>
// //         </div>
// //       </div>
      
// //       <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-400">
// //         <div className="flex items-center gap-2 mb-4">
// //           <Heart className="w-6 h-6 text-teal-600" />
// //           <h3 className="text-xl font-semibold text-teal-700">A Message for You</h3>
// //         </div>
// //         <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
// //           <p className="text-gray-700 leading-relaxed font-medium italic">
// //             {sections.closingMessage && !sections.closingMessage.toLowerCase().includes('no suggestions found') 
// //               ? sections.closingMessage 
// //               : "It’s normal to feel overwhelmed at times, but your feelings matter and they don’t make you weak. Allow yourself to rest and breathe when you need to. You are doing the best you can, and that is more than enough. Hold on to hope, because every storm eventually passes. 💙"}
// //           </p>
// //         </div>
// //       </div>

// //       {sections.tracker && (
// //         <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white mt-6">
// //           <div className="flex items-center gap-3">
// //             <Heart className="w-6 h-6 text-pink-300" />
// //             <div>
// //               <h3 className="text-lg font-semibold">Recovery Tracker Active</h3>
// //               <p className="text-blue-100 text-sm">{sections.tracker}</p>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// //   // If no valid content at all, show closing message
// //   if (!hasMainContent && !sections.tracker) {
// //     return (
// //       <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-200">
// //         <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
// //           <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-3 rounded-full">
// //             <Brain className="w-8 h-8 text-white" />
// //           </div>
// //           <div>
// //             <h2 className="text-2xl font-bold text-gray-800">AI Therapist Suggestion</h2>
// //             <p className="text-sm text-gray-600">Professional guidance based on your emotional analysis</p>
// //           </div>
// //         </div>
        
// //         <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-gray-400">
// //           <div className="flex items-center gap-2 mb-4">
// //             <FileText className="w-6 h-6 text-gray-600" />
// //             <h3 className="text-xl font-semibold text-gray-700">Closing Message</h3>
// //           </div>
// //           <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
// //             <p className="text-gray-700 leading-relaxed font-medium">
// //               {sections.closingMessage || "No suggestions found."}
// //             </p>
// //           </div>
// //         </div>

// //         {sections.tracker && (
// //           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white mt-6">
// //             <div className="flex items-center gap-3">
// //               <Heart className="w-6 h-6 text-pink-300" />
// //               <div>
// //                 <h3 className="text-lg font-semibold">Recovery Tracker Active</h3>
// //                 <p className="text-blue-100 text-sm">{sections.tracker}</p>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-green-100">
// //       {/* Header */}
// //       <div className="flex items-center gap-3 mb-6 pb-4 border-b border-green-200">
// //         <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-full">
// //           <Brain className="w-8 h-8 text-white" />
// //         </div>
// //         <div>
// //           <h2 className="text-2xl font-bold text-gray-800">AI Therapist Suggestion</h2>
// //           <p className="text-sm text-gray-600">Professional guidance based on your emotional analysis</p>
// //         </div>
// //       </div>

// //       <div className="space-y-6">
// //         {/* Recovery Tracker at Top - ALWAYS SHOW IF EXISTS */}
// //         {sections.tracker && (
// //           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
// //             <div className="flex items-center gap-3">
// //               <Heart className="w-6 h-6 text-pink-300" />
// //               <div>
// //                 <h3 className="text-lg font-semibold">Recovery Tracker Active</h3>
// //                 <p className="text-blue-100 text-sm">{sections.tracker}</p>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Do's Section */}
// //         {sections.dos.length > 0 && (
// //           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
// //             <div className="flex items-center gap-2 mb-4">
// //               <CheckCircle className="w-6 h-6 text-green-600" />
// //               <h3 className="text-xl font-semibold text-green-700">Recommended Actions</h3>
// //             </div>
// //             <ul className="space-y-3">
// //               {sections.dos.map((item, idx) => (
// //                 <li key={idx} className="text-gray-700 leading-relaxed p-4 bg-green-50 rounded-lg font-medium flex items-start gap-2">
// //                   <span className="text-green-600 font-bold">•</span>
// //                   <span>{item}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}

// //         {/* Don'ts Section */}
// //         {sections.donts.length > 0 && (
// //           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
// //             <div className="flex items-center gap-2 mb-4">
// //               <XCircle className="w-6 h-6 text-red-600" />
// //               <h3 className="text-xl font-semibold text-red-700">Things to Avoid</h3>
// //             </div>
// //             <ul className="space-y-3">
// //               {sections.donts.map((item, idx) => (
// //                 <li key={idx} className="text-gray-700 leading-relaxed p-4 bg-red-50 rounded-lg font-medium flex items-start gap-2">
// //                   <span className="text-red-600 font-bold">•</span>
// //                   <span>{item}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}

// //         {/* Tips Section */}
// //         {sections.tips.length > 0 && (
// //           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
// //             <div className="flex items-center gap-2 mb-4">
// //               <Lightbulb className="w-6 h-6 text-amber-600" />
// //               <h3 className="text-xl font-semibold text-amber-700">Tips of the Day</h3>
// //             </div>
// //             {sections.tips.map((tip, idx) => (
// //               <div key={idx} className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-3 last:mb-0">
// //                 <p className="text-gray-700 leading-relaxed italic font-medium">{tip}</p>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Journaling Prompts / Reflections */}
// //         {sections.reflections.length > 0 && (
// //           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-pink-500">
// //             <div className="flex items-center gap-2 mb-4">
// //               <MessageSquare className="w-6 h-6 text-pink-600" />
// //               <h3 className="text-xl font-semibold text-pink-700">Journaling Prompts</h3>
// //             </div>
// //             {sections.reflections.map((reflection, idx) => (
// //               <div key={idx} className="bg-pink-50 p-4 rounded-lg border border-pink-200 mb-3 last:mb-0">
// //                 <p className="text-gray-700 leading-relaxed font-medium">{reflection}</p>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Music for Relaxation */}
// //         {sections.music.length > 0 && (
// //           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
// //             <div className="flex items-center gap-2 mb-4">
// //               <Music className="w-6 h-6 text-indigo-600" />
// //               <h3 className="text-xl font-semibold text-indigo-700">Music for Relaxation</h3>
// //             </div>
// //             {sections.music.map((music, idx) => (
// //               <div key={idx} className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-3 last:mb-0">
// //                 <p className="text-gray-700 leading-relaxed font-medium italic">{music}</p>
// //                 <div className="mt-3 p-3 bg-indigo-100 rounded border-l-4 border-indigo-400">
// //                   <p className="text-sm text-indigo-700 italic">🎵 Listen while practicing deep breathing</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Breathing Exercises */}
// //         {sections.breathing.length > 0 && (
// //           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cyan-500">
// //             <div className="flex items-center gap-2 mb-4">
// //               <Wind className="w-6 h-6 text-cyan-600" />
// //               <h3 className="text-xl font-semibold text-cyan-700">Breathing Exercises</h3>
// //             </div>
// //             {sections.breathing.map((breathing, idx) => (
// //               <div key={idx} className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 mb-3 last:mb-0">
// //                 <p className="text-gray-700 leading-relaxed font-medium">{breathing}</p>
// //                 <div className="mt-4 p-3 bg-cyan-100 rounded border-l-4 border-cyan-400">
// //                   <p className="text-sm text-cyan-700 italic">🌬️ Practice this technique for a few minutes to calm your mind</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Meditation */}
// //         {sections.meditation.length > 0 && (
// //           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
// //             <div className="flex items-center gap-2 mb-4">
// //               <Video className="w-6 h-6 text-purple-600" />
// //               <h3 className="text-xl font-semibold text-purple-700">Meditation</h3>
// //             </div>
// //             {sections.meditation.map((meditation, idx) => (
// //               <div key={idx} className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-3 last:mb-0">
// //                 <p className="text-gray-700 leading-relaxed font-medium">{meditation}</p>
// //                 <div className="mt-4 p-3 bg-purple-100 rounded border-l-4 border-purple-400">
// //                   <p className="text-sm text-purple-700 italic">🧘 Take time to practice and find peace</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Motivational Quotes */}
// //         {sections.quotes.length > 0 && (
// //           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
// //             <div className="flex items-center gap-2 mb-4">
// //               <Quote className="w-6 h-6 text-orange-600" />
// //               <h3 className="text-xl font-semibold text-orange-700">Motivational Quotes</h3>
// //             </div>
// //             {sections.quotes.map((quote, idx) => (
// //               <blockquote key={idx} className="bg-orange-50 p-4 rounded-lg border border-orange-200 border-l-4 border-l-orange-400 mb-3 last:mb-0">
// //                 <p className="text-lg italic text-gray-700 leading-relaxed font-medium">{quote}</p>
// //               </blockquote>
// //             ))}
// //           </div>
// //         )}

// //         {/* Empathetic Messages */}
// //         {sections.empathy.length > 0 && (
// //           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
// //             <div className="flex items-center gap-2 mb-4">
// //               <Heart className="w-6 h-6 text-teal-600" />
// //               <h3 className="text-xl font-semibold text-teal-700">Empathetic Message</h3>
// //             </div>
// //             {sections.empathy.map((empathy, idx) => (
// //               <div key={idx} className="bg-teal-50 p-4 rounded-lg border border-teal-200 mb-3 last:mb-0">
// //                 <p className="text-gray-700 leading-relaxed font-medium italic">{empathy}</p>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfessionalSuggestion;
// import React from 'react';
// import { Brain, CheckCircle, XCircle, Lightbulb, Music, Wind, Video, Heart, MessageSquare, Quote, Star, Zap, FileText, BarChart3 } from 'lucide-react';

// const ProfessionalSuggestion = ({ suggestion }) => {
//   // Don't render if no suggestion at all
//   if (!suggestion || suggestion.trim() === '') {
//     return null;
//   }

//   // Helper function to render multiline text with line breaks
//   const renderMultilineText = (text) => {
//     return text.split('\n').map((line, index) => (
//       <React.Fragment key={index}>
//         {line.trim()}
//         {index < text.split('\n').length - 1 && <br />}
//       </React.Fragment>
//     ));
//   };

//   // ULTIMATE parsing function for ALL your database formats
//   const parseAISuggestion = (text) => {
//     const sections = {
//       dos: [],
//       donts: [],
//       tips: [],
//       quotes: [],
//       reflections: [],
//       music: [],
//       breathing: [],
//       meditation: [],
//       empathy: [],
//       tracker: null,
//       closingMessage: null
//     };
    
//     // Handle "No suggestions found" case
//     if (text.toLowerCase().includes('no suggestions found')) {
//       sections.closingMessage = 'No suggestions found.';
//     }
    
//     // Clean the text - remove markdown formatting
//     const cleanText = text.replace(/\*\*/g, ''); // Remove markdown bold
//     const lines = cleanText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
//     let i = 0;
//     while (i < lines.length) {
//       const line = lines[i].toLowerCase();
//       const originalLine = lines[i];
      
//       // Extract Recovery Tracker - Handle FIRST (highest priority)
//       if (originalLine.includes('🕊️')) {
//         sections.tracker = originalLine.replace(/🕊️\s*/, '');
//         i++;
//         continue;
//       }
      
//       // Extract Do's - Multiple format support (including AI-generated recommendations)
//       if ((line.includes('✅') && (line.includes('do') || line.includes('recommended'))) || 
//           line.startsWith('do\'s:') || 
//           line.startsWith('dos:') ||
//           line.includes('✅ be clear about what you want')) {
        
//         i++; // Move to next line after header
        
//         while (i < lines.length) {
//           const currentLine = lines[i].trim();
//           const lowerCurrentLine = currentLine.toLowerCase();
          
//           // Stop conditions - check for next section headers
//           if (lowerCurrentLine.includes('❌') || 
//               lowerCurrentLine.includes('don\'t') ||
//               lowerCurrentLine.includes('### ❌') ||
//               lowerCurrentLine.includes('---') ||
//               lowerCurrentLine.includes('tip of the day') ||
//               lowerCurrentLine.includes('motivational quote') ||
//               lowerCurrentLine.includes('journaling prompt') ||
//               lowerCurrentLine.includes('music for relaxation') ||
//               lowerCurrentLine.includes('🌧️') ||
//               lowerCurrentLine.includes('🌬') ||
//               lowerCurrentLine.includes('✨') || // Added sparkle emoji
//               lowerCurrentLine.includes('🧘') ||
//               lowerCurrentLine.includes('💡') ||
//               lowerCurrentLine.includes('🌟') ||
//               lowerCurrentLine.includes('📝') ||
//               lowerCurrentLine.includes('💬') ||
//               lowerCurrentLine.includes('🎧') ||
//               lowerCurrentLine.includes('🕊️') ||
//               lowerCurrentLine.includes('### meditation') ||
//               lowerCurrentLine.includes('## motivational quote') ||
//               (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('quote')) ||
//               (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('tip'))) {
//             break;
//           }
          
//           // Extract various Do's formats
//           if (currentLine.startsWith('-') || 
//               currentLine.startsWith('•') || 
//               /^\d+\./.test(currentLine) ||
//               currentLine.startsWith('✅') ||
//               currentLine.includes('AI-generated actionable recommendation') ||
//               currentLine.includes('**AI-generated actionable recommendation') ||
//               currentLine.includes('[AI-generated actionable recommendation') ||
//               currentLine.includes('**Meditation or Breathing Exercise**') ||
//               currentLine.includes('**Deep Breathing Practice**') ||
//               currentLine.includes('**Journaling**') ||
//               currentLine.includes('Journaling prompt:') ||
//               currentLine.includes('50-minute meditation break') ||
//               currentLine.includes('30–45 minute breathing exercises')) {
            
//             let doItem = currentLine
//               .replace(/^[-•]\s*/, '')
//               .replace(/^\d+\.\s*/, '')
//               .replace(/^✅\s*/, '')
//               .replace(/AI-generated actionable recommendation \d+[:\]]*\s*/gi, '')
//               .replace(/\*\*AI-generated actionable recommendation \d+\*\*:\s*/gi, '')
//               .replace(/\[AI-generated actionable recommendation \d+\]:\s*/gi, '')
//               .replace(/Journaling prompt:\s*/gi, '')
//               .replace(/\*\*(.*?)\*\*:/g, '$1:');
            
//             if (doItem.length > 5) {
//               sections.dos.push(doItem);
//             }
//           }
//           i++;
//         }
//         continue;
//       }
      
//       // Extract Don'ts - Multiple format support
//       if ((line.includes('❌') && line.includes('don')) || 
//           line.startsWith('don\'ts:') || 
//           line.startsWith('donts:') ||
//           line.includes('### ❌ don\'ts') ||
//           line.includes('**❌ don\'ts**')) {
        
//         i++; // Move to next line after header
        
//         while (i < lines.length) {
//           const currentLine = lines[i].trim();
//           const lowerCurrentLine = currentLine.toLowerCase();
          
//           // Stop conditions
//           if (lowerCurrentLine.includes('---') ||
//               lowerCurrentLine.includes('tip of the day') ||
//               lowerCurrentLine.includes('motivational quote') ||
//               lowerCurrentLine.includes('journaling prompt') ||
//               lowerCurrentLine.includes('music for relaxation') ||
//               lowerCurrentLine.includes('💡') ||
//               lowerCurrentLine.includes('🌟') ||
//               lowerCurrentLine.includes('📝') ||
//               lowerCurrentLine.includes('💬') ||
//               lowerCurrentLine.includes('🎧') ||
//               lowerCurrentLine.includes('🌧️') ||
//               lowerCurrentLine.includes('🌬') ||
//               lowerCurrentLine.includes('✨') || // Added sparkle emoji
//               lowerCurrentLine.includes('🧘') ||
//               lowerCurrentLine.includes('🕊️') ||
//               lowerCurrentLine.includes('### meditation') ||
//               lowerCurrentLine.includes('## motivational quote') ||
//               (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('quote')) ||
//               (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('tip'))) {
//             break;
//           }
          
//           if (currentLine.startsWith('-') || 
//               currentLine.startsWith('•') || 
//               /^\d+\./.test(currentLine) ||
//               currentLine.includes('AI-generated thing to avoid') ||
//               currentLine.includes('**AI-generated thing to avoid') ||
//               currentLine.includes('[AI-generated thing to avoid')) {
            
//             let dontItem = currentLine
//               .replace(/^[-•]\s*/, '')
//               .replace(/^\d+\.\s*/, '')
//               .replace(/AI-generated thing to avoid \d+[:\]]*\s*/gi, '')
//               .replace(/\*\*AI-generated thing to avoid \d+\*\*:\s*/gi, '')
//               .replace(/\[AI-generated thing to avoid \d+\]:\s*/gi, '');
            
//             if (dontItem.length > 5) {
//               sections.donts.push(dontItem);
//             }
//           }
//           i++;
//         }
//         continue;
//       }
      
//       // Extract Tips - Multiple formats
//       if ((line.includes('💡') && line.includes('tip')) ||
//           line.includes('**tip of the day**') ||
//           line.includes('tip of the day:') ||
//           line.includes('### 💡 tip of the day') ||
//           line.includes('- 💡 tip of the day')) {
        
//         let tipContent = originalLine
//           .replace(/💡\s*/gi, '')
//           .replace(/\*\*tip of the day\*\*:?\s*/gi, '')
//           .replace(/tip of the day:?\s*/gi, '')
//           .replace(/### 💡 tip of the day:?\s*/gi, '')
//           .replace(/- 💡 tip of the day:?\s*/gi, '')
//           .replace(/^["""']/, '')
//           .replace(/["""']$/, '');
        
//         if (tipContent.length > 10) {
//           sections.tips.push(tipContent.trim());
//         }
//         i++;
//         continue;
//       }
      
//       // Extract Quotes - Multiple formats
//       if ((line.includes('💡') && line.includes('quote')) ||
//           (line.includes('💬') && line.includes('quote')) ||
//           line.includes('**motivational quote**') ||
//           line.includes('motivational quote:') ||
//           line.includes('motational quote:') ||
//           line.includes('### 💬 motivational quote') ||
//           line.includes('## motivational quote:')) {
        
//         let quoteContent = originalLine
//           .replace(/💡\s*/gi, '')
//           .replace(/💬\s*/gi, '')
//           .replace(/\*\*motivational quote\*\*:?\s*/gi, '')
//           .replace(/mo[tv]ational quote:?\s*/gi, '')
//           .replace(/### 💬 motivational quote:?\s*/gi, '')
//           .replace(/## motivational quote:?\s*/gi, '')
//           .replace(/^["""'*]/, '')
//           .replace(/["""'*]$/, '');
        
//         if (quoteContent.length > 10) {
//           sections.quotes.push(quoteContent.trim());
//         }
//         i++;
//         continue;
//       }
      
//       // Extract Journaling Prompts - Multiple formats
//       if ((line.includes('🌟') && line.includes('journaling')) ||
//           (line.includes('📝') && line.includes('journaling')) ||
//           line.includes('journaling prompt:') ||
//           line.includes('**journaling prompt**') ||
//           line.includes('### 📝 journaling prompt') ||
//           line.includes('📊 reflection question')) {
        
//         let reflectionContent = originalLine
//           .replace(/🌟\s*/gi, '')
//           .replace(/📝\s*/gi, '')
//           .replace(/📊\s*/gi, '')
//           .replace(/journaling prompt:?\s*/gi, '')
//           .replace(/\*\*journaling prompt\*\*:?\s*/gi, '')
//           .replace(/### 📝 journaling prompt:?\s*/gi, '')
//           .replace(/reflection question:?\s*/gi, '')
//           .replace(/^["""'*]/, '')
//           .replace(/["""'*]$/, '');
        
//         if (reflectionContent.length > 10) {
//           sections.reflections.push(reflectionContent.trim());
//         }
//         i++;
//         continue;
//       }
      
//       // Extract Music - Multiple formats
//       if ((line.includes('🌧️') && line.includes('music')) ||
//           (line.includes('🎧') && line.includes('music')) ||
//           line.includes('music for relaxation:') ||
//           line.includes('**music for relaxation**') ||
//           line.includes('### 🎧 music for relaxation')) {
        
//         let musicContent = originalLine
//           .replace(/🌧️\s*/gi, '')
//           .replace(/🎧\s*/gi, '')
//           .replace(/music for relaxation:?\s*/gi, '')
//           .replace(/\*\*music for relaxation\*\*:?\s*/gi, '')
//           .replace(/### 🎧 music for relaxation:?\s*/gi, '');
        
//         if (musicContent.length > 10) {
//           sections.music.push(musicContent.trim());
//         }
//         i++;
//         continue;
//       }
      
//       // Extract Breathing Exercise - Support both 🌬 and ✨
//       if ((line.includes('🌬') && line.includes('breathing')) ||
//           (line.includes('✨') && line.includes('breathing')) ||
//           line.includes('breathing exercise:') ||
//           line.includes('**breathing exercise**') ||
//           line.includes('### 🌬 breathing exercise')) {
        
//         let breathingContent = originalLine
//           .replace(/🌬\s*/gi, '')
//           .replace(/✨\s*/gi, '')
//           .replace(/breathing exercise:?\s*/gi, '')
//           .replace(/\*\*breathing exercise\*\*:?\s*/gi, '')
//           .replace(/### 🌬 breathing exercise:?\s*/gi, '');
        
//         if (breathingContent.length > 10) {
//           sections.breathing.push(breathingContent.trim());
//         }
//         i++;
//         continue;
//       }
      
//       // Extract Meditation - Support ### Meditation Video Recommendation:
//       if ((line.includes('🧘') && line.includes('meditation')) ||
//           line.includes('meditation exercise:') ||
//           line.includes('meditation video:') ||
//           line.includes('**meditation exercise**') ||
//           line.includes('### 🧘 meditation video') ||
//           line.includes('### meditation video recommendation:')) {
        
//         let meditationContent = '';
        
//         if (line.includes('### meditation video recommendation:')) {
//           // Handle multi-line meditation recommendation format
//           i++; // Move to next line
//           const meditationLines = [];
          
//           while (i < lines.length) {
//             const currentLine = lines[i].trim();
//             const lowerCurrentLine = currentLine.toLowerCase();
            
//             // Stop when we hit a section break or recovery tracker
//             if (lowerCurrentLine.includes('---') ||
//                 lowerCurrentLine.includes('🕊️') ||
//                 lowerCurrentLine.includes('## motivational quote') ||
//                 currentLine.trim() === '') {
//               break;
//             }
            
//             // Extract channel name and video title
//             if (currentLine.includes('**Channel Name**:') || 
//                 currentLine.includes('**Video Title**:') ||
//                 currentLine.startsWith('- **')) {
//               meditationLines.push(currentLine.replace(/^-\s*/, '').replace(/\*\*/g, ''));
//             }
//             i++;
//           }
          
//           if (meditationLines.length > 0) {
//             meditationContent = meditationLines.join('\n');
//           }
//         } else {
//           meditationContent = originalLine
//             .replace(/🧘\s*/gi, '')
//             .replace(/meditation (exercise|video):?\s*/gi, '')
//             .replace(/\*\*meditation exercise\*\*:?\s*/gi, '')
//             .replace(/### 🧘 meditation video:?\s*/gi, '');
//         }
        
//         if (meditationContent.length > 10) {
//           sections.meditation.push(meditationContent.trim());
//         }
        
//         if (!line.includes('### meditation video recommendation:')) {
//           i++;
//         }
//         continue;
//       }
      
//       // Extract Empathetic Messages - Multiple formats
//       if (line.includes('empathetic closing message') ||
//           (line.includes('🌟') && line.includes('message')) ||
//           line.includes('**closing message**')) {
        
//         let empathyContent = originalLine
//           .replace(/🌟\s*/gi, '')
//           .replace(/empathetic closing message:?\s*/gi, '')
//           .replace(/\*\*closing message\*\*:?\s*/gi, '')
//           .replace(/^["""']/, '')
//           .replace(/["""']$/, '');
        
//         if (empathyContent.length > 10) {
//           sections.empathy.push(empathyContent.trim());
//         }
//         i++;
//         continue;
//       }
      
//       i++;
//     }
    
//     // Extract standalone closing message (paragraph before recovery tracker)
//     const textBeforeTracker = text.split('🕊️')[0];
//     const allLines = textBeforeTracker.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
//     // Look for standalone paragraphs (not part of structured sections)
//     for (let j = allLines.length - 1; j >= 0; j--) {
//       const line = allLines[j];
//       const lowerLine = line.toLowerCase();
      
//       // Check if this is a standalone message (not part of structured content)
//       if (!lowerLine.includes('✅') && 
//           !lowerLine.includes('❌') && 
//           !lowerLine.includes('💡') && 
//           !lowerLine.includes('✨') && 
//           !lowerLine.includes('🌬') && 
//           !lowerLine.includes('🧘') && 
//           !lowerLine.includes('###') && 
//           !lowerLine.includes('##') && 
//           !lowerLine.includes('**channel name**') && 
//           !lowerLine.includes('**video title**') && 
//           !lowerLine.includes('---') && 
//           line.length > 30 && // Minimum length for meaningful message
//           !line.startsWith('-') && 
//           !line.startsWith('•')) {
        
//         sections.closingMessage = line;
//         break; // Take the last meaningful paragraph
//       }
//     }
    
//     return sections;
//   };

//   const sections = parseAISuggestion(suggestion);

//   // Check if we have any meaningful content
//   const hasMainContent = sections.dos.length > 0 || sections.donts.length > 0 || 
//                         sections.tips.length > 0 || sections.quotes.length > 0 || 
//                         sections.reflections.length > 0 || sections.music.length > 0 || 
//                         sections.breathing.length > 0 || sections.meditation.length > 0 ||
//                         sections.empathy.length > 0 || sections.closingMessage;

//   // If we only have tracker message and nothing else, render minimal component
//   if (!hasMainContent && sections.tracker) {
//     return (
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white max-w-4xl mx-auto">
//         <div className="flex items-center gap-3">
//           <Heart className="w-6 h-6 text-pink-300" />
//           <div>
//             <h3 className="text-lg font-semibold">Recovery Tracker Active</h3>
//             <p className="text-blue-100 text-sm">{sections.tracker}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // If no valid content at all, show empathetic closing message
//   if (!hasMainContent && !sections.tracker) {
//     return (
//       <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-200">
//         <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
//           <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-3 rounded-full">
//             <Brain className="w-8 h-8 text-white" />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">AI Therapist Suggestion</h2>
//             <p className="text-sm text-gray-600">Professional guidance based on your emotional analysis</p>
//           </div>
//         </div>
        
//         <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-400">
//           <div className="flex items-center gap-2 mb-4">
//             <Heart className="w-6 h-6 text-teal-600" />
//             <h3 className="text-xl font-semibold text-teal-700">A Message for You</h3>
//           </div>
//           <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
//             <p className="text-gray-700 leading-relaxed font-medium italic">
//               {sections.closingMessage && !sections.closingMessage.toLowerCase().includes('no suggestions found') 
//                 ? renderMultilineText(sections.closingMessage)
//                 : "Sometimes the best guidance is simply knowing that you're not alone in this journey. Take a moment to breathe, be gentle with yourself, and remember that it's okay to feel whatever you're feeling right now. You have the strength to navigate through this, one step at a time. 💙"}
//             </p>
//           </div>
//         </div>

//         {sections.tracker && (
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white mt-6">
//             <div className="flex items-center gap-3">
//               <Heart className="w-6 h-6 text-pink-300" />
//               <div>
//                 <h3 className="text-lg font-semibold">Recovery Tracker Active</h3>
//                 <p className="text-blue-100 text-sm">{sections.tracker}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-green-100">
//       {/* Header */}
//       <div className="flex items-center gap-3 mb-6 pb-4 border-b border-green-200">
//         <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-full">
//           <Brain className="w-8 h-8 text-white" />
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">AI Therapist Suggestion</h2>
//           <p className="text-sm text-gray-600">Professional guidance based on your emotional analysis</p>
//         </div>
//       </div>

//       <div className="space-y-6">
//         {/* Recovery Tracker at Top - ALWAYS SHOW IF EXISTS */}
//         {sections.tracker && (
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
//             <div className="flex items-center gap-3">
//               <Heart className="w-6 h-6 text-pink-300" />
//               <div>
//                 <h3 className="text-lg font-semibold">Recovery Tracker Active</h3>
//                 <p className="text-blue-100 text-sm">{sections.tracker}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Do's Section */}
//         {sections.dos.length > 0 && (
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
//             <div className="flex items-center gap-2 mb-4">
//               <CheckCircle className="w-6 h-6 text-green-600" />
//               <h3 className="text-xl font-semibold text-green-700">Recommended Actions</h3>
//             </div>
//             <ul className="space-y-3">
//               {sections.dos.map((item, idx) => (
//                 <li key={idx} className="text-gray-700 leading-relaxed p-4 bg-green-50 rounded-lg font-medium flex items-start gap-2">
//                   <span className="text-green-600 font-bold">•</span>
//                   <span>{renderMultilineText(item)}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Don'ts Section */}
//         {sections.donts.length > 0 && (
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
//             <div className="flex items-center gap-2 mb-4">
//               <XCircle className="w-6 h-6 text-red-600" />
//               <h3 className="text-xl font-semibold text-red-700">Things to Avoid</h3>
//             </div>
//             <ul className="space-y-3">
//               {sections.donts.map((item, idx) => (
//                 <li key={idx} className="text-gray-700 leading-relaxed p-4 bg-red-50 rounded-lg font-medium flex items-start gap-2">
//                   <span className="text-red-600 font-bold">•</span>
//                   <span>{renderMultilineText(item)}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Tips Section */}
//         {sections.tips.length > 0 && (
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
//             <div className="flex items-center gap-2 mb-4">
//               <Lightbulb className="w-6 h-6 text-amber-600" />
//               <h3 className="text-xl font-semibold text-amber-700">Tips of the Day</h3>
//             </div>
//             {sections.tips.map((tip, idx) => (
//               <div key={idx} className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-3 last:mb-0">
//                 <p className="text-gray-700 leading-relaxed italic font-medium">{renderMultilineText(tip)}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Journaling Prompts / Reflections */}
//         {sections.reflections.length > 0 && (
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-pink-500">
//             <div className="flex items-center gap-2 mb-4">
//               <MessageSquare className="w-6 h-6 text-pink-600" />
//               <h3 className="text-xl font-semibold text-pink-700">Journaling Prompts</h3>
//             </div>
//             {sections.reflections.map((reflection, idx) => (
//               <div key={idx} className="bg-pink-50 p-4 rounded-lg border border-pink-200 mb-3 last:mb-0">
//                 <p className="text-gray-700 leading-relaxed font-medium">{renderMultilineText(reflection)}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Music for Relaxation */}
//         {sections.music.length > 0 && (
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
//             <div className="flex items-center gap-2 mb-4">
//               <Music className="w-6 h-6 text-indigo-600" />
//               <h3 className="text-xl font-semibold text-indigo-700">Music for Relaxation</h3>
//             </div>
//             {sections.music.map((music, idx) => (
//               <div key={idx} className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-3 last:mb-0">
//                 <p className="text-gray-700 leading-relaxed font-medium italic">{renderMultilineText(music)}</p>
//                 <div className="mt-3 p-3 bg-indigo-100 rounded border-l-4 border-indigo-400">
//                   <p className="text-sm text-indigo-700 italic">🎵 Listen while practicing deep breathing</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Breathing Exercises */}
//         {sections.breathing.length > 0 && (
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cyan-500">
//             <div className="flex items-center gap-2 mb-4">
//               <Wind className="w-6 h-6 text-cyan-600" />
//               <h3 className="text-xl font-semibold text-cyan-700">Breathing Exercises</h3>
//             </div>
//             {sections.breathing.map((breathing, idx) => (
//               <div key={idx} className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 mb-3 last:mb-0">
//                 <p className="text-gray-700 leading-relaxed font-medium">{renderMultilineText(breathing)}</p>
//                 <div className="mt-4 p-3 bg-cyan-100 rounded border-l-4 border-cyan-400">
//                   <p className="text-sm text-cyan-700 italic">✨ Practice this technique for a few minutes to calm your mind</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Meditation */}
//         {sections.meditation.length > 0 && (
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
//             <div className="flex items-center gap-2 mb-4">
//               <Video className="w-6 h-6 text-purple-600" />
//               <h3 className="text-xl font-semibold text-purple-700">Meditation Video</h3>
//             </div>
//             {sections.meditation.map((meditation, idx) => (
//               <div key={idx} className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-3 last:mb-0">
//                 <p className="text-gray-700 leading-relaxed font-medium">{renderMultilineText(meditation)}</p>
//                 <div className="mt-4 p-3 bg-purple-100 rounded border-l-4 border-purple-400">
//                   <p className="text-sm text-purple-700 italic">🧘 Find this video and practice for inner peace</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Motivational Quotes */}
//         {sections.quotes.length > 0 && (
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
//             <div className="flex items-center gap-2 mb-4">
//               <Quote className="w-6 h-6 text-orange-600" />
//               <h3 className="text-xl font-semibold text-orange-700">Motivational Quotes</h3>
//             </div>
//             {sections.quotes.map((quote, idx) => (
//               <blockquote key={idx} className="bg-orange-50 p-4 rounded-lg border border-orange-200 border-l-4 border-l-orange-400 mb-3 last:mb-0">
//                 <p className="text-lg italic text-gray-700 leading-relaxed font-medium">{renderMultilineText(quote)}</p>
//               </blockquote>
//             ))}
//           </div>
//         )}

//         {/* Empathetic Messages */}
//         {sections.empathy.length > 0 && (
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
//             <div className="flex items-center gap-2 mb-4">
//               <Heart className="w-6 h-6 text-teal-600" />
//               <h3 className="text-xl font-semibold text-teal-700">Empathetic Message</h3>
//             </div>
//             {sections.empathy.map((empathy, idx) => (
//               <div key={idx} className="bg-teal-50 p-4 rounded-lg border border-teal-200 mb-3 last:mb-0">
//                 <p className="text-gray-700 leading-relaxed font-medium italic">{renderMultilineText(empathy)}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Closing Message */}
//         {sections.closingMessage && !sections.closingMessage.toLowerCase().includes('no suggestions found') && (
//           <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-400">
//             <div className="flex items-center gap-2 mb-4">
//               <Heart className="w-6 h-6 text-teal-600" />
//               <h3 className="text-xl font-semibold text-teal-700">A Message for You</h3>
//             </div>
//             <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
//               <p className="text-gray-700 leading-relaxed font-medium italic">{renderMultilineText(sections.closingMessage)}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfessionalSuggestion;
// ProfessionalSuggestion.js - Updated with Emotion Analysis Display
import React from 'react';
import { 
  Brain, 
  CheckCircle, 
  XCircle, 
  Lightbulb, 
  Music, 
  Wind, 
  Video, 
  Heart, 
  MessageSquare, 
  Quote, 
  Star, 
  Zap, 
  FileText, 
  BarChart3,
  Clock,
  Calendar,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

const ProfessionalSuggestion = ({ suggestion, emotionData }) => {
  // Don't render if no suggestion at all
  if (!suggestion || suggestion.trim() === '') {
    return null;
  }

  // Helper function to render multiline text with line breaks
  const renderMultilineText = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.trim()}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  // Helper function to format date (DD-MM-YYYY to readable format)
  const formatDate = (dateString) => {
    if (!dateString) return 'Today';
    
    // Handle DD-MM-YYYY format from your backend (like "13-09-2025")
    if (dateString.includes('-') && dateString.length === 10) {
      const parts = dateString.split('-');
      if (parts.length === 3) {
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const year = parseInt(parts[2]);
        
        // Validate the parts
        if (day <= 31 && month <= 12 && year > 1900) {
          const date = new Date(year, month - 1, day);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });
        }
      }
    }
    
    // Fallback for other formats
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      }
    } catch (error) {
      console.error('Date parsing error:', error);
    }
    
    return dateString;
  };

  // Helper function to get emotion color
  const getEmotionColor = (emotion) => {
    const emotionColors = {
      'Happy': 'from-yellow-500 to-orange-500',
      'Sad': 'from-blue-500 to-indigo-600',
      'Sadness': 'from-blue-500 to-indigo-600',
      'Angry': 'from-red-500 to-red-600',
      'Anxious': 'from-purple-500 to-purple-600',
      'Stressed': 'from-red-400 to-pink-500',
      'Calm': 'from-green-400 to-blue-500',
      'Excited': 'from-pink-500 to-yellow-500',
      'Confused': 'from-gray-500 to-gray-600',
      'Mixed': 'from-indigo-500 to-purple-600'
    };
    return emotionColors[emotion] || 'from-gray-500 to-gray-600';
  };

  // Helper function to get stress level color
  const getStressLevelColor = (stressLevel) => {
    const stressColors = {
      'Low': 'from-green-500 to-emerald-600',
      'Medium': 'from-yellow-500 to-orange-500',
      'High': 'from-red-500 to-red-600'
    };
    return stressColors[stressLevel] || 'from-gray-500 to-gray-600';
  };

  // Helper function to get emotion icon
  const getEmotionIcon = (emotion) => {
    const emotionIcons = {
      'Happy': '😊',
      'Sad': '😢',
      'Sadness': '😢',
      'Angry': '😠',
      'Anxious': '😰',
      'Stressed': '😫',
      'Calm': '😌',
      'Excited': '🤗',
      'Confused': '😕',
      'Mixed': '🤔'
    };
    return emotionIcons[emotion] || '🤔';
  };

  // ULTIMATE parsing function for ALL your database formats
  const parseAISuggestion = (text) => {
    const sections = {
      dos: [],
      donts: [],
      tips: [],
      quotes: [],
      reflections: [],
      music: [],
      breathing: [],
      meditation: [],
      empathy: [],
      tracker: null,
      closingMessage: null
    };
    
    // Handle "No suggestions found" case
    if (text.toLowerCase().includes('no suggestions found')) {
      sections.closingMessage = 'No suggestions found.';
    }
    
    // Clean the text - remove markdown formatting
    const cleanText = text.replace(/\*\*/g, ''); // Remove markdown bold
    const lines = cleanText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    let i = 0;
    while (i < lines.length) {
      const line = lines[i].toLowerCase();
      const originalLine = lines[i];
      
      // Extract Recovery Tracker - Handle FIRST (highest priority)
      if (originalLine.includes('🕊️')) {
        sections.tracker = originalLine.replace(/🕊️\s*/, '');
        i++;
        continue;
      }
      
      // Extract Do's - Multiple format support (including AI-generated recommendations)
      if ((line.includes('✅') && (line.includes('do') || line.includes('recommended'))) || 
          line.startsWith('do\'s:') || 
          line.startsWith('dos:') ||
          line.includes('✅ be clear about what you want')) {
        
        i++; // Move to next line after header
        
        while (i < lines.length) {
          const currentLine = lines[i].trim();
          const lowerCurrentLine = currentLine.toLowerCase();
          
          // Stop conditions - check for next section headers
          if (lowerCurrentLine.includes('❌') || 
              lowerCurrentLine.includes('don\'t') ||
              lowerCurrentLine.includes('### ❌') ||
              lowerCurrentLine.includes('---') ||
              lowerCurrentLine.includes('tip of the day') ||
              lowerCurrentLine.includes('motivational quote') ||
              lowerCurrentLine.includes('journaling prompt') ||
              lowerCurrentLine.includes('music for relaxation') ||
              lowerCurrentLine.includes('🌧️') ||
              lowerCurrentLine.includes('🌬') ||
              lowerCurrentLine.includes('✨') || // Added sparkle emoji
              lowerCurrentLine.includes('🧘') ||
              lowerCurrentLine.includes('💡') ||
              lowerCurrentLine.includes('🌟') ||
              lowerCurrentLine.includes('📝') ||
              lowerCurrentLine.includes('💬') ||
              lowerCurrentLine.includes('🎧') ||
              lowerCurrentLine.includes('🕊️') ||
              lowerCurrentLine.includes('### meditation') ||
              lowerCurrentLine.includes('## motivational quote') ||
              (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('quote')) ||
              (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('tip'))) {
            break;
          }
          
          // Extract various Do's formats
          if (currentLine.startsWith('-') || 
              currentLine.startsWith('•') || 
              /^\d+\./.test(currentLine) ||
              currentLine.startsWith('✅') ||
              currentLine.includes('AI-generated actionable recommendation') ||
              currentLine.includes('**AI-generated actionable recommendation') ||
              currentLine.includes('[AI-generated actionable recommendation') ||
              currentLine.includes('**Meditation or Breathing Exercise**') ||
              currentLine.includes('**Deep Breathing Practice**') ||
              currentLine.includes('**Journaling**') ||
              currentLine.includes('Journaling prompt:') ||
              currentLine.includes('50-minute meditation break') ||
              currentLine.includes('30–45 minute breathing exercises')) {
            
            let doItem = currentLine
              .replace(/^[-•]\s*/, '')
              .replace(/^\d+\.\s*/, '')
              .replace(/^✅\s*/, '')
              .replace(/AI-generated actionable recommendation \d+[:\]]*\s*/gi, '')
              .replace(/\*\*AI-generated actionable recommendation \d+\*\*:\s*/gi, '')
              .replace(/\[AI-generated actionable recommendation \d+\]:\s*/gi, '')
              .replace(/Journaling prompt:\s*/gi, '')
              .replace(/\*\*(.*?)\*\*:/g, '$1:');
            
            if (doItem.length > 5) {
              sections.dos.push(doItem);
            }
          }
          i++;
        }
        continue;
      }
      
      // Extract Don'ts - Multiple format support
      if ((line.includes('❌') && line.includes('don')) || 
          line.startsWith('don\'ts:') || 
          line.startsWith('donts:') ||
          line.includes('### ❌ don\'ts') ||
          line.includes('**❌ don\'ts**')) {
        
        i++; // Move to next line after header
        
        while (i < lines.length) {
          const currentLine = lines[i].trim();
          const lowerCurrentLine = currentLine.toLowerCase();
          
          // Stop conditions
          if (lowerCurrentLine.includes('---') ||
              lowerCurrentLine.includes('tip of the day') ||
              lowerCurrentLine.includes('motivational quote') ||
              lowerCurrentLine.includes('journaling prompt') ||
              lowerCurrentLine.includes('music for relaxation') ||
              lowerCurrentLine.includes('💡') ||
              lowerCurrentLine.includes('🌟') ||
              lowerCurrentLine.includes('📝') ||
              lowerCurrentLine.includes('💬') ||
              lowerCurrentLine.includes('🎧') ||
              lowerCurrentLine.includes('🌧️') ||
              lowerCurrentLine.includes('🌬') ||
              lowerCurrentLine.includes('✨') || // Added sparkle emoji
              lowerCurrentLine.includes('🧘') ||
              lowerCurrentLine.includes('🕊️') ||
              lowerCurrentLine.includes('### meditation') ||
              lowerCurrentLine.includes('## motivational quote') ||
              (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('quote')) ||
              (lowerCurrentLine.includes('**') && lowerCurrentLine.includes('tip'))) {
            break;
          }
          
          if (currentLine.startsWith('-') || 
              currentLine.startsWith('•') || 
              /^\d+\./.test(currentLine) ||
              currentLine.includes('AI-generated thing to avoid') ||
              currentLine.includes('**AI-generated thing to avoid') ||
              currentLine.includes('[AI-generated thing to avoid')) {
            
            let dontItem = currentLine
              .replace(/^[-•]\s*/, '')
              .replace(/^\d+\.\s*/, '')
              .replace(/AI-generated thing to avoid \d+[:\]]*\s*/gi, '')
              .replace(/\*\*AI-generated thing to avoid \d+\*\*:\s*/gi, '')
              .replace(/\[AI-generated thing to avoid \d+\]:\s*/gi, '');
            
            if (dontItem.length > 5) {
              sections.donts.push(dontItem);
            }
          }
          i++;
        }
        continue;
      }
      
      // Extract Tips - Multiple formats
      if ((line.includes('💡') && line.includes('tip')) ||
          line.includes('**tip of the day**') ||
          line.includes('tip of the day:') ||
          line.includes('### 💡 tip of the day') ||
          line.includes('- 💡 tip of the day')) {
        
        let tipContent = originalLine
          .replace(/💡\s*/gi, '')
          .replace(/\*\*tip of the day\*\*:?\s*/gi, '')
          .replace(/tip of the day:?\s*/gi, '')
          .replace(/### 💡 tip of the day:?\s*/gi, '')
          .replace(/- 💡 tip of the day:?\s*/gi, '')
          .replace(/^["""']/, '')
          .replace(/["""']$/, '');
        
        if (tipContent.length > 10) {
          sections.tips.push(tipContent.trim());
        }
        i++;
        continue;
      }
      
      // Extract Quotes - Multiple formats
      if ((line.includes('💡') && line.includes('quote')) ||
          (line.includes('💬') && line.includes('quote')) ||
          line.includes('**motivational quote**') ||
          line.includes('motivational quote:') ||
          line.includes('motational quote:') ||
          line.includes('### 💬 motivational quote') ||
          line.includes('## motivational quote:')) {
        
        let quoteContent = originalLine
          .replace(/💡\s*/gi, '')
          .replace(/💬\s*/gi, '')
          .replace(/\*\*motivational quote\*\*:?\s*/gi, '')
          .replace(/mo[tv]ational quote:?\s*/gi, '')
          .replace(/### 💬 motivational quote:?\s*/gi, '')
          .replace(/## motivational quote:?\s*/gi, '')
          .replace(/^["""'*]/, '')
          .replace(/["""'*]$/, '');
        
        if (quoteContent.length > 10) {
          sections.quotes.push(quoteContent.trim());
        }
        i++;
        continue;
      }
      
      // Extract Journaling Prompts - Multiple formats
      if ((line.includes('🌟') && line.includes('journaling')) ||
          (line.includes('📝') && line.includes('journaling')) ||
          line.includes('journaling prompt:') ||
          line.includes('**journaling prompt**') ||
          line.includes('### 📝 journaling prompt') ||
          line.includes('📊 reflection question')) {
        
        let reflectionContent = originalLine
          .replace(/🌟\s*/gi, '')
          .replace(/📝\s*/gi, '')
          .replace(/📊\s*/gi, '')
          .replace(/journaling prompt:?\s*/gi, '')
          .replace(/\*\*journaling prompt\*\*:?\s*/gi, '')
          .replace(/### 📝 journaling prompt:?\s*/gi, '')
          .replace(/reflection question:?\s*/gi, '')
          .replace(/^["""'*]/, '')
          .replace(/["""'*]$/, '');
        
        if (reflectionContent.length > 10) {
          sections.reflections.push(reflectionContent.trim());
        }
        i++;
        continue;
      }
      
      // Extract Music - Multiple formats
      if ((line.includes('🌧️') && line.includes('music')) ||
          (line.includes('🎧') && line.includes('music')) ||
          line.includes('music for relaxation:') ||
          line.includes('**music for relaxation**') ||
          line.includes('### 🎧 music for relaxation')) {
        
        let musicContent = originalLine
          .replace(/🌧️\s*/gi, '')
          .replace(/🎧\s*/gi, '')
          .replace(/music for relaxation:?\s*/gi, '')
          .replace(/\*\*music for relaxation\*\*:?\s*/gi, '')
          .replace(/### 🎧 music for relaxation:?\s*/gi, '');
        
        if (musicContent.length > 10) {
          sections.music.push(musicContent.trim());
        }
        i++;
        continue;
      }
      
      // Extract Breathing Exercise - Support both 🌬 and ✨
      if ((line.includes('🌬') && line.includes('breathing')) ||
          (line.includes('✨') && line.includes('breathing')) ||
          line.includes('breathing exercise:') ||
          line.includes('**breathing exercise**') ||
          line.includes('### 🌬 breathing exercise')) {
        
        let breathingContent = originalLine
          .replace(/🌬\s*/gi, '')
          .replace(/✨\s*/gi, '')
          .replace(/breathing exercise:?\s*/gi, '')
          .replace(/\*\*breathing exercise\*\*:?\s*/gi, '')
          .replace(/### 🌬 breathing exercise:?\s*/gi, '');
        
        if (breathingContent.length > 10) {
          sections.breathing.push(breathingContent.trim());
        }
        i++;
        continue;
      }
      
      // Extract Meditation - Support ### Meditation Video Recommendation:
      if ((line.includes('🧘') && line.includes('meditation')) ||
          line.includes('meditation exercise:') ||
          line.includes('meditation video:') ||
          line.includes('**meditation exercise**') ||
          line.includes('### 🧘 meditation video') ||
          line.includes('### meditation video recommendation:')) {
        
        let meditationContent = '';
        
        if (line.includes('### meditation video recommendation:')) {
          // Handle multi-line meditation recommendation format
          i++; // Move to next line
          const meditationLines = [];
          
          while (i < lines.length) {
            const currentLine = lines[i].trim();
            const lowerCurrentLine = currentLine.toLowerCase();
            
            // Stop when we hit a section break or recovery tracker
            if (lowerCurrentLine.includes('---') ||
                lowerCurrentLine.includes('🕊️') ||
                lowerCurrentLine.includes('## motivational quote') ||
                currentLine.trim() === '') {
              break;
            }
            
            // Extract channel name and video title
            if (currentLine.includes('**Channel Name**:') || 
                currentLine.includes('**Video Title**:') ||
                currentLine.startsWith('- **')) {
              meditationLines.push(currentLine.replace(/^-\s*/, '').replace(/\*\*/g, ''));
            }
            i++;
          }
          
          if (meditationLines.length > 0) {
            meditationContent = meditationLines.join('\n');
          }
        } else {
          meditationContent = originalLine
            .replace(/🧘\s*/gi, '')
            .replace(/meditation (exercise|video):?\s*/gi, '')
            .replace(/\*\*meditation exercise\*\*:?\s*/gi, '')
            .replace(/### 🧘 meditation video:?\s*/gi, '');
        }
        
        if (meditationContent.length > 10) {
          sections.meditation.push(meditationContent.trim());
        }
        
        if (!line.includes('### meditation video recommendation:')) {
          i++;
        }
        continue;
      }
      
      // Extract Empathetic Messages - Multiple formats
      if (line.includes('empathetic closing message') ||
          (line.includes('🌟') && line.includes('message')) ||
          line.includes('**closing message**')) {
        
        let empathyContent = originalLine
          .replace(/🌟\s*/gi, '')
          .replace(/empathetic closing message:?\s*/gi, '')
          .replace(/\*\*closing message\*\*:?\s*/gi, '')
          .replace(/^["""']/, '')
          .replace(/["""']$/, '');
        
        if (empathyContent.length > 10) {
          sections.empathy.push(empathyContent.trim());
        }
        i++;
        continue;
      }
      
      i++;
    }
    
    // Extract standalone closing message (paragraph before recovery tracker)
    const textBeforeTracker = text.split('🕊️')[0];
    const allLines = textBeforeTracker.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    // Look for standalone paragraphs (not part of structured sections)
    for (let j = allLines.length - 1; j >= 0; j--) {
      const line = allLines[j];
      const lowerLine = line.toLowerCase();
      
      // Check if this is a standalone message (not part of structured content)
      if (!lowerLine.includes('✅') && 
          !lowerLine.includes('❌') && 
          !lowerLine.includes('💡') && 
          !lowerLine.includes('✨') && 
          !lowerLine.includes('🌬') && 
          !lowerLine.includes('🧘') && 
          !lowerLine.includes('###') && 
          !lowerLine.includes('##') && 
          !lowerLine.includes('**channel name**') && 
          !lowerLine.includes('**video title**') && 
          !lowerLine.includes('---') && 
          line.length > 30 && // Minimum length for meaningful message
          !line.startsWith('-') && 
          !line.startsWith('•')) {
        
        sections.closingMessage = line;
        break; // Take the last meaningful paragraph
      }
    }
    
    return sections;
  };

  const sections = parseAISuggestion(suggestion);

  // Check if we have any meaningful content
  const hasMainContent = sections.dos.length > 0 || sections.donts.length > 0 || 
                        sections.tips.length > 0 || sections.quotes.length > 0 || 
                        sections.reflections.length > 0 || sections.music.length > 0 || 
                        sections.breathing.length > 0 || sections.meditation.length > 0 ||
                        sections.empathy.length > 0 || sections.closingMessage;

  // If we only have tracker message and nothing else, render minimal component
  if (!hasMainContent && sections.tracker) {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <Heart className="w-6 h-6 text-pink-300" />
          <div>
            <h3 className="text-lg font-semibold">Recovery Tracker Active</h3>
            <p className="text-blue-100 text-sm">{sections.tracker}</p>
          </div>
        </div>
      </div>
    );
  }

  // If no valid content at all, show empathetic closing message
  if (!hasMainContent && !sections.tracker) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-200">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-3 rounded-full">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">AI Therapist Suggestion</h2>
            <p className="text-sm text-gray-600">Professional guidance based on your emotional analysis</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-400">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-teal-600" />
            <h3 className="text-xl font-semibold text-teal-700">A Message for You</h3>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
            <p className="text-gray-700 leading-relaxed font-medium italic">
              {sections.closingMessage && !sections.closingMessage.toLowerCase().includes('no suggestions found') 
                ? renderMultilineText(sections.closingMessage)
                : "Sometimes the best guidance is simply knowing that you're not alone in this journey. Take a moment to breathe, be gentle with yourself, and remember that it's okay to feel whatever you're feeling right now. You have the strength to navigate through this, one step at a time. 💙"}
            </p>
          </div>
        </div>

        {sections.tracker && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white mt-6">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-pink-300" />
              <div>
                <h3 className="text-lg font-semibold">Recovery Tracker Active</h3>
                <p className="text-blue-100 text-sm">{sections.tracker}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-green-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-green-200">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-full">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">AI Therapist Suggestion</h2>
          <p className="text-sm text-gray-600">Professional guidance based on your emotional analysis</p>
        </div>
      </div>

      {/* PROFESSIONAL EMOTION ANALYSIS SECTION - Added as requested */}
      {emotionData && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Your Emotional Analysis</h3>
          </div>
          
          {/* Professional Grid Layout - Matching Your Image Format */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Detected Emotion */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${getEmotionColor(emotionData.emotion)} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl">{getEmotionIcon(emotionData.emotion)}</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">DETECTED EMOTION</p>
                  <p className="text-lg font-bold text-gray-800">{emotionData.emotion}</p>
                </div>
              </div>
              {emotionData.emotion_severity && (
                <div className="mt-3 px-3 py-1 bg-gray-100 rounded-full">
                  <p className="text-xs font-semibold text-gray-600">Severity: {emotionData.emotion_severity}</p>
                </div>
              )}
            </div>
            
            {/* Stress Level */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${getStressLevelColor(emotionData.stress_level)} rounded-xl flex items-center justify-center shadow-lg`}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">STRESS LEVEL</p>
                  <p className="text-lg font-bold text-gray-800">{emotionData.stress_level}</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${getStressLevelColor(emotionData.stress_level)}`}
                    style={{ 
                      width: emotionData.stress_level === 'Low' ? '33%' : 
                             emotionData.stress_level === 'Medium' ? '66%' : '100%' 
                    }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Analysis Time */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">ANALYSIS TIME</p>
                  <p className="text-lg font-bold text-gray-800">{emotionData.time_of_analysis}</p>
                </div>
              </div>
            </div>
            
            {/* Date */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">DATE</p>
                  <p className="text-lg font-bold text-gray-800">{formatDate(emotionData.date)}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional Emotional Summary */}
          <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-indigo-600" />
              <span className="font-bold text-indigo-800">Emotional Summary</span>
            </div>
            <p className="text-sm text-indigo-700 leading-relaxed">
              Based on your input, I've detected <strong>{emotionData.emotion?.toLowerCase()}</strong> emotions 
              with a <strong>{emotionData.stress_level?.toLowerCase()}</strong> stress level. 
              This analysis was completed on {formatDate(emotionData.date)} at {emotionData.time_of_analysis}.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Recovery Tracker at Top - ALWAYS SHOW IF EXISTS */}
        {sections.tracker && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-pink-300" />
              <div>
                <h3 className="text-lg font-semibold">Recovery Tracker Active</h3>
                <p className="text-blue-100 text-sm">{sections.tracker}</p>
              </div>
            </div>
          </div>
        )}

        {/* Do's Section */}
        {sections.dos.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-green-700">Recommended Actions</h3>
            </div>
            <ul className="space-y-3">
              {sections.dos.map((item, idx) => (
                <li key={idx} className="text-gray-700 leading-relaxed p-4 bg-green-50 rounded-lg font-medium flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>{renderMultilineText(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Don'ts Section */}
        {sections.donts.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold text-red-700">Things to Avoid</h3>
            </div>
            <ul className="space-y-3">
              {sections.donts.map((item, idx) => (
                <li key={idx} className="text-gray-700 leading-relaxed p-4 bg-red-50 rounded-lg font-medium flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>{renderMultilineText(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tips Section */}
        {sections.tips.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-semibold text-amber-700">Tips of the Day</h3>
            </div>
            {sections.tips.map((tip, idx) => (
              <div key={idx} className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-3 last:mb-0">
                <p className="text-gray-700 leading-relaxed italic font-medium">{renderMultilineText(tip)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Journaling Prompts / Reflections */}
        {sections.reflections.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-pink-500">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-6 h-6 text-pink-600" />
              <h3 className="text-xl font-semibold text-pink-700">Journaling Prompts</h3>
            </div>
            {sections.reflections.map((reflection, idx) => (
              <div key={idx} className="bg-pink-50 p-4 rounded-lg border border-pink-200 mb-3 last:mb-0">
                <p className="text-gray-700 leading-relaxed font-medium">{renderMultilineText(reflection)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Music for Relaxation */}
        {sections.music.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-semibold text-indigo-700">Music for Relaxation</h3>
            </div>
            {sections.music.map((music, idx) => (
              <div key={idx} className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-3 last:mb-0">
                <p className="text-gray-700 leading-relaxed font-medium italic">{renderMultilineText(music)}</p>
                <div className="mt-3 p-3 bg-indigo-100 rounded border-l-4 border-indigo-400">
                  <p className="text-sm text-indigo-700 italic">🎵 Listen while practicing deep breathing</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Breathing Exercises */}
        {sections.breathing.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cyan-500">
            <div className="flex items-center gap-2 mb-4">
              <Wind className="w-6 h-6 text-cyan-600" />
              <h3 className="text-xl font-semibold text-cyan-700">Breathing Exercises</h3>
            </div>
            {sections.breathing.map((breathing, idx) => (
              <div key={idx} className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 mb-3 last:mb-0">
                <p className="text-gray-700 leading-relaxed font-medium">{renderMultilineText(breathing)}</p>
                <div className="mt-4 p-3 bg-cyan-100 rounded border-l-4 border-cyan-400">
                  <p className="text-sm text-cyan-700 italic">✨ Practice this technique for a few minutes to calm your mind</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Meditation */}
        {sections.meditation.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-purple-700">Meditation Video</h3>
            </div>
            {sections.meditation.map((meditation, idx) => (
              <div key={idx} className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-3 last:mb-0">
                <p className="text-gray-700 leading-relaxed font-medium">{renderMultilineText(meditation)}</p>
                <div className="mt-4 p-3 bg-purple-100 rounded border-l-4 border-purple-400">
                  <p className="text-sm text-purple-700 italic">🧘 Find this video and practice for inner peace</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Motivational Quotes */}
        {sections.quotes.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
            <div className="flex items-center gap-2 mb-4">
              <Quote className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-orange-700">Motivational Quotes</h3>
            </div>
            {sections.quotes.map((quote, idx) => (
              <blockquote key={idx} className="bg-orange-50 p-4 rounded-lg border border-orange-200 border-l-4 border-l-orange-400 mb-3 last:mb-0">
                <p className="text-lg italic text-gray-700 leading-relaxed font-medium">{renderMultilineText(quote)}</p>
              </blockquote>
            ))}
          </div>
        )}

        {/* Empathetic Messages */}
        {sections.empathy.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-teal-600" />
              <h3 className="text-xl font-semibold text-teal-700">Empathetic Message</h3>
            </div>
            {sections.empathy.map((empathy, idx) => (
              <div key={idx} className="bg-teal-50 p-4 rounded-lg border border-teal-200 mb-3 last:mb-0">
                <p className="text-gray-700 leading-relaxed font-medium italic">{renderMultilineText(empathy)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Closing Message */}
        {sections.closingMessage && !sections.closingMessage.toLowerCase().includes('no suggestions found') && (
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-400">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-teal-600" />
              <h3 className="text-xl font-semibold text-teal-700">A Message for You</h3>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <p className="text-gray-700 leading-relaxed font-medium italic">{renderMultilineText(sections.closingMessage)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalSuggestion;
