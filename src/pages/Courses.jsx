


import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Home, Layers } from "lucide-react";
import api from "../api"; // Adjust the import based on your project structure
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import {Helmet } from "react-helmet";
import { Filter, X } from "lucide-react"; 


import {
  MapPin,

  Building,
  Star,
  BookOpen,
  Globe,
  Search,
  ArrowUpDown,
  List,
  LayoutGrid,
   ChevronUp,
    ChevronDown,
   
     Heart ,
               
  ArrowRight,  
  Clock,       
  Calendar,    
  DollarSign,  
  Award,
} from "lucide-react";
import { toast } from "react-toastify";

const CourseCardSkeleton = () => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 animate-pulse flex flex-col md:flex-row justify-between overflow-hidden">
    <div className="flex-1">
      <div className="flex gap-5">
        <div className="w-[100px] h-[100px] bg-gray-200 rounded-xl"></div>
        <div className="flex-1">
          <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/2 mb-4"></div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="h-4 bg-gray-200 rounded-md w-24"></div>
            <div className="h-4 bg-gray-200 rounded-md w-20"></div>
            <div className="h-4 bg-gray-200 rounded-md w-28"></div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 mt-5 pt-5">
        <div className="h-5 bg-gray-200 rounded-md w-1/2 mb-8"></div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-start divide-x divide-slate-300">
          <div className="flex-1 px-4"><div className="h-4 bg-gray-200 rounded-md w-1/2"></div></div>
          <div className="flex-1 px-4"><div className="h-4 bg-gray-200 rounded-md w-1/2"></div></div>
          <div className="flex-1 px-4"><div className="h-4 bg-gray-200 rounded-md w-1/2"></div></div>
          <div className="flex-1 px-4"><div className="h-4 bg-gray-200 rounded-md w-1/2"></div></div>
        </div>
      </div>
    </div>
    <div className="bg-slate-50/60 w-full md:max-w-[220px] px-6 py-6 flex flex-col items-center justify-between gap-4">
      <div className="h-6 bg-gray-200 rounded-md w-16"></div>
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
      </div>
    </div>
  </div>
);

const FilterPanelSkeleton = () => (
  <div className="hidden lg:block w-[280px] min-w-[280px] flex-shrink-0 bg-white border border-gray-200 p-5 rounded-xl shadow-md space-y-6 text-base animate-pulse">
    <div className="flex justify-between items-center mb-2">
      <div className="h-6 bg-gray-200 rounded-md w-1/3"></div>
      <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
    </div>
    {[...Array(5)].map((_, i) => (
      <div key={i} className="space-y-2">
        <div className="h-5 bg-gray-200 rounded-md w-1/2"></div>
        <div className="mt-3 pl-1 space-y-3">
          <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
        </div>
      </div>
    ))}
  </div>
);


const Courses = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('list');

const [sortBy, setSortBy] = useState('relevance');

  const infoText = `Find a list of Courses in Malaysia to study at top private & Public universities in Malaysia. Learn about the course duration, intake, tuition fee, and discover information about leading private universities offering diploma, bachelor degree, master programs, and phd courses. Apply directly for your desired courses today.`;

  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [comparisonCourses, setComparisonCourses] = useState([]);
const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [seo, setSeo] = useState({});
  const [totalCourses, setTotalCourses] = useState(0);
  const [dynamicDescription, setDynamicDescription] = useState("");
    console.log("🔥 Inside Component - dynamicDescription:", dynamicDescription);


  // Add selected filters state
const [selectedFilters, setSelectedFilters] = useState({
  levels: [],        // ✅ Array
  categories: [],    
  specializations: [], 
  intakes: [],       
  study_modes: [],   
});

// ✅ YE NAYA STATE ADD KARO (selectedFilters ke NEECHE)
const [lastSelectedFilter, setLastSelectedFilter] = useState({
  key: "", // filter type (levels, categories, etc.)
  value: "" // filter value
});
  // Active filter count
const activeFilterCount = Object.values(selectedFilters)
  .filter(arr => Array.isArray(arr) && arr.length > 0)
  .reduce((total, arr) => total + arr.length, 0);

const [filters, setFilters] = useState({
  levels: [],      // ✅ Objects store honge {value, label}
  categories: [],
  specializations: [],
  study_modes: [],
  intakes: [],
});
  const [openFilters, setOpenFilters] = useState(
      Object.keys(filters).reduce((acc, key) => {
        acc[key] = true; // Initially all filters are open
        return acc;
      }, {})
    );;

  const [coursesData, setCoursesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [paginationLinks, setPaginationLinks] = useState([]);
   const [appliedCourses, setAppliedCourses] = useState(new Set());


   // ✅ Dynamic placeholder generate karne ke liye
const getSearchPlaceholder = () => {
  const activeFilters = [];
  
  // ✅ Array check karo
  if (selectedFilters.levels?.length > 0) {
    activeFilters.push(...selectedFilters.levels.map(l => l.replace(/-/g, ' ').toUpperCase()));
  }
  if (selectedFilters.categories?.length > 0) {
    activeFilters.push(...selectedFilters.categories.map(c => c.replace(/-/g, ' ').toUpperCase()));
  }
  if (selectedFilters.specializations?.length > 0) {
    activeFilters.push(...selectedFilters.specializations.map(s => s.replace(/-/g, ' ').toUpperCase()));
  }
  
  if (activeFilters.length > 0) {
    return `Search in ${activeFilters.join(', ')} courses...`;
  }
  
  return "Search courses...";
};
const fetchFilterOptions = async (filtersToApply = {}) => {
  try {
    const keyMapping = {
      levels: 'level',
      categories: 'category',
      specializations: 'specialization',
      study_modes: 'study_mode',
      intakes: 'intake'
    };

    const queryParams = new URLSearchParams();
    for (const [key, val] of Object.entries(filtersToApply)) {
      if (val) {
        const paramKey = keyMapping[key];
        if (paramKey) {
          const slugValue = String(val).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          queryParams.set(paramKey, slugValue);
        }
      }
    }
    
    const endpoint = `/courses-in-malaysia?${queryParams.toString()}`;
    const res = await api.get(endpoint);
    const fetchedFilters = res.data.filters || {};
    
    // ✅✅✅ NORMALIZE KARO - STEP 1 WALA FIX ✅✅✅
    const transformedFilters = {
      levels: fetchedFilters.levels?.map(item => ({
        value: String(item.level || item.slug || item.name).toLowerCase().trim().replace(/\s+/g, '-'),
        label: item.name || item.level || item.slug,
        id: item.id
      })) || [],
      
      categories: fetchedFilters.categories?.map(item => ({
        value: String(item.slug || item.name).toLowerCase().trim().replace(/\s+/g, '-'),
        label: item.name || item.slug,
        id: item.id
      })) || [],
      
      specializations: fetchedFilters.specializations?.map(item => ({
        value: String(item.slug || item.name || item.specialization_name).toLowerCase().trim().replace(/\s+/g, '-'),
        label: item.name || item.specialization_name || item.slug,
        id: item.id
      })) || [],
      
      study_modes: fetchedFilters.study_modes?.map(item => ({
        value: String(item.study_mode || item.slug || item.name).toLowerCase().trim().replace(/\s+/g, '-'),
        label: item.study_mode || item.name || item.slug,
        id: item.id
      })) || [],
      
      intakes: fetchedFilters.intakes?.map(item => ({
        value: String(item.month || item.slug || item.name).toLowerCase().trim().replace(/\s+/g, '-'),
        label: item.month || item.name || item.slug,
        id: item.id
      })) || [],
    };
    
    console.log("🔥 Transformed Filters:", transformedFilters);
    setFilters(transformedFilters);

    if (Object.keys(openFilters).length === 0 && Object.keys(transformedFilters).length > 0) {
      setOpenFilters(
        Object.keys(transformedFilters).reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {})
      );
    }
  } catch (e) {
    console.error("Error fetching filters:", e);
  }
};
 const fetchDynamicDescription = async (filterType, filterId) => {
  if (!filterId) {
    setDynamicDescription("");
    return;
  }
  
  try {
    let endpoint = '';
    
    if (filterType === 'levels') {
      endpoint = `/courses-in-malaysia/level-content/${filterId}`;
    } else if (filterType === 'categories') {
      endpoint = `/courses-in-malaysia/category-content/${filterId}`;
  } else if (filterType === 'specializations') { //
  endpoint = `/courses-in-malaysia/specialization-content/${filterId}`;
}
    
    if (endpoint) {
      console.log("🔍 Fetching description from:", endpoint);
      const res = await api.get(endpoint);
      
      console.log("📦 Full API Response:", res);
      console.log("📦 Response Data:", res.data);
      
      // ✅✅✅ FIX: coursesDescription CHECK KARO ✅✅✅
      const description = res?.data?.coursesDescription; // Sirf ye check karo

if (description) {
  console.log("✅ Description found:", description);
  setDynamicDescription(description);
} else {
  console.error("❌ coursesDescription NOT found in response!");
  console.log("📋 Available keys:", Object.keys(res?.data || {}));
  setDynamicDescription("");
}
      
      console.log("📝 Extracted Description:", description);
      
      if (description) {
        setDynamicDescription(description);
        console.log("✅ Description SET successfully!");
      } else {
        console.warn("⚠️ No description found in response");
        console.log("🔍 Available keys in response:", Object.keys(res?.data || {}));
        setDynamicDescription("");
      }
    }
  } catch (error) {
    console.error("❌ Error fetching description:", error);
    console.error("❌ Error details:", error.response?.data);
    setDynamicDescription("");
  }
};
const fetchCourses = async (page = 1, filtersToApply = {}, searchTerm = "") => {
  setLoading(true);
  try {
    const keyMapping = {
      levels: 'level',
      categories: 'category',
      specializations: 'specialization',
      study_modes: 'study_mode',
      intakes: 'intake'
    };

    const queryParams = new URLSearchParams({ page });
    
    if (searchTerm) {
      queryParams.set("search", searchTerm);
    }
    
    // ✅✅✅ YAHAN FIX HAI ✅✅✅
    for (const [key, values] of Object.entries(filtersToApply)) {
      if (Array.isArray(values) && values.length > 0) {
        const paramKey = keyMapping[key];
        if (paramKey) {
          values.forEach(val => {
            // ✅ LOWERCASE + DASHES format mein bhejo
            const cleanValue = String(val).toLowerCase().replace(/\s+/g, '-');
            queryParams.append(paramKey, cleanValue);
          });
        }
      }
    }
    
    const endpoint = `/courses-in-malaysia?${queryParams.toString()}`;
    console.log("🔍 API Request URL:", endpoint);
    
    const res = await api.get(endpoint);
    const rows = res?.data?.rows;

    setCoursesData(rows?.data || []);
    setTotalCourses(rows?.total || 0);
    setPaginationLinks(rows?.links || []);
    setCurrentPage(rows?.current_page || 1);
    setLastPage(rows?.last_page || 1);
    setSeo(res.data.seo || {});

  } catch (e) {
    console.error("Error fetching courses:", e);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.get("/student/applied-college", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        const appliedList = res.data.applied_programs || [];
        const appliedIds = new Set(appliedList.map(item => item.prog_id));
        setAppliedCourses(appliedIds);
      })
      .catch((err) => {
        console.error("Error fetching applied programs:", err);
      });
    }
  }, []);
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const path = location.pathname;
  
  const keyMapping = {
    level: 'levels',
    category: 'categories',
    specialization: 'specializations',
    study_mode: 'study_modes',
    intake: 'intakes'
  };
  
  // ✅ ARRAYS initialize karo
  const filtersFromURL = {
    levels: [],
    categories: [],
    specializations: [],
    intakes: [],
    study_modes: [],
  };
  
  // ✅ PATH se filter nikalo
  if (path.includes('-courses')) {
    const pathFilter = path
      .replace('/', '')
      .replace('-courses', '')
      .toLowerCase()
      .replace(/\s+/g, '-');
    
    const levelFilters = ['pre-university', 'diploma', 'under-graduate', 'post-graduate', 'post-graduate-diploma', 'phd'];
    const categoryFilters = ['a-levels', 'certificate', 'business-and-management', 'creative-arts-and-design', 'education-and-training'];
    const specializationFilters = ['engineering-and-technology', 'computer-science', 'medicine-and-health'];
    const intakeFilters = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const studyModeFilters = ['full-time', 'part-time', 'online', 'by-course-work'];
    
    if (levelFilters.includes(pathFilter)) {
      filtersFromURL.levels = [pathFilter];
    } else if (categoryFilters.includes(pathFilter)) {
      filtersFromURL.categories = [pathFilter];
    } else if (specializationFilters.includes(pathFilter)) {
      filtersFromURL.specializations = [pathFilter];
    } else if (intakeFilters.includes(pathFilter)) {
      filtersFromURL.intakes = [pathFilter];
    } else if (studyModeFilters.includes(pathFilter)) {
      filtersFromURL.study_modes = [pathFilter];
    }
  }
  
  // ✅✅✅ FIX: SIRF PATH KE FILTER TYPE KO SKIP KARO ✅✅✅
  const pathFilterType = Object.keys(filtersFromURL).find(key => filtersFromURL[key].length > 0);
  
 params.forEach((value, key) => {
  const stateKey = keyMapping[key];
  
  if (stateKey && stateKey !== pathFilterType) {
    const cleanValue = value.toLowerCase().trim().replace(/\s+/g, "-"); // ✅ Consistent format
    
    if (!filtersFromURL[stateKey].includes(cleanValue)) {
      filtersFromURL[stateKey].push(cleanValue);
    }
  }
});
  
  console.log("🔥 Filters from URL:", filtersFromURL);
  
  setSelectedFilters(filtersFromURL);
  
  // ✅ Last filter set karo
  const activeFilters = Object.entries(filtersFromURL).filter(([_, vals]) => vals.length > 0);
  if (activeFilters.length > 0) {
    const [lastKey, lastValues] = activeFilters[activeFilters.length - 1];
    setLastSelectedFilter({ key: lastKey, value: lastValues[lastValues.length - 1] });
    console.log("✅ Last filter set:", lastKey, "->", lastValues[lastValues.length - 1]);
  }
}, [location.search, location.pathname]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search');
    setSearch(searchQuery || "");
  }, [location.search]);

// ✅ URL se sirf page number load karo, filters mat override karo
useEffect(() => {
  const params = new URLSearchParams(location.search);
  
  // Sirf page number update karo
  const pageFromURL = params.get('page');
  if (pageFromURL) {
    setCurrentPage(parseInt(pageFromURL));
  }
}, [location.search]);



  // ✅ Auto-apply after sign-up redirect
// ✅ Auto-apply after sign-up redirect
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const programId = params.get('program_id');
  const redirect = params.get('redirect');
  const token = localStorage.getItem("token");

  if (programId && redirect === 'courses' && token) {
    console.log("🔥 Auto-applying for program:", programId);
    
    api.get(`/student/apply-program/${programId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      toast.success("Program applied successfully!");
      
      // ✅ YAHAN FIX HAI - parseInt() use karo
      setAppliedCourses(prev => new Set([...prev, parseInt(programId)]));
      
      // URL clean karo
      const newParams = new URLSearchParams(location.search);
      newParams.delete('program_id');
      newParams.delete('redirect');
      navigate({ search: newParams.toString() }, { replace: true });
    })
    .catch((error) => {
      if (error.response?.status === 409) {
        toast.warn("You have already applied for this program.");
        
        // ✅ YAHAN BHI parseInt() use karo
        setAppliedCourses(prev => new Set([...prev, parseInt(programId)]));
      } else {
        console.error("Auto-apply failed:", error);
        toast.error("Failed to apply. Please try again.");
      }
      
      // URL clean karo
      const newParams = new URLSearchParams(location.search);
      newParams.delete('program_id');
      newParams.delete('redirect');
      navigate({ search: newParams.toString() }, { replace: true });
    });
  }
}, [location.search, navigate]);






useEffect(() => {
  fetchCourses(currentPage, selectedFilters, search);
  fetchFilterOptions(selectedFilters);
}, [currentPage, selectedFilters, search]);

useEffect(() => {
  let isMounted = true;
  
  // ✅ Ye useEffect ab SIRF URL se initial load ke liye hai
  // Description fetching handleFilterChange mein ho rahi hai
  
  const hasActiveFilters = 
    selectedFilters.levels?.length > 0 || 
    selectedFilters.categories?.length > 0 || 
    selectedFilters.specializations?.length > 0;
  
  // ✅ SIRF tab chalo jab URL se page load ho (pehli baar)
  if (hasActiveFilters && lastSelectedFilter.value && filters[lastSelectedFilter.key]?.length > 0) {
    const filterType = lastSelectedFilter.key;
    const filterValue = lastSelectedFilter.value;
    
    const filterItem = filters[filterType]?.find(item => {
      const itemValue = String(item.value || item.label).toLowerCase().trim();
      return itemValue === filterValue;
    });
    
    if (filterItem?.id && isMounted) {
      console.log(`🔥 [useEffect] Initial load - Calling API for ${filterType} with ID:`, filterItem.id);
      fetchDynamicDescription(filterType, filterItem.id);
    }
  } else if (isMounted && !hasActiveFilters) {
    setDynamicDescription("");
  }
  
  return () => {
    isMounted = false;
  };
}, [filters]); 
const handleFilterChange = (filterType, value) => {
  const normalizedValue = String(value).toLowerCase().trim();
  
  const currentValues = selectedFilters[filterType];
  const isSelected = currentValues.includes(normalizedValue);
  
  let newValues;
  if (isSelected) {
    newValues = currentValues.filter(v => v !== normalizedValue);
  } else {
    newValues = [...currentValues, normalizedValue];
  }
  
  const updatedFilters = {
    ...selectedFilters,
    [filterType]: newValues,
  };
  
  setSelectedFilters(updatedFilters);
  
  // ✅✅✅ YAHAN FIX - IMMEDIATELY DESCRIPTION FETCH KARO ✅✅✅
  if (newValues.length > 0) {
    const lastValue = newValues[newValues.length - 1];
    
    setLastSelectedFilter({
      key: filterType,
      value: lastValue
    });
    
    // ✅ TURANT DESCRIPTION FETCH - WAIT MAT KARO
    if (filterType === 'levels' || filterType === 'categories' || filterType === 'specializations') {
      // ✅ CURRENT filters state se directly ID dhundo
      const filterItem = filters[filterType]?.find(item => {
        const itemValue = String(item.value || item.label).toLowerCase().trim();
        return itemValue === lastValue;
      });
      
      if (filterItem?.id) {
        console.log(`🔥 [handleFilterChange] Fetching description for ${filterType} ID:`, filterItem.id);
        fetchDynamicDescription(filterType, filterItem.id);
      } else {
        console.warn(`⚠️ [handleFilterChange] Filter item NOT found for value:`, lastValue);
        console.log("📦 Available filters:", filters[filterType]);
      }
    }
  } else {
    // ✅ Agar sab filters remove ho gaye
    const remainingFilters = Object.entries(updatedFilters).find(([_, vals]) => vals.length > 0);
    
    if (remainingFilters) {
      const [remainingKey, remainingVals] = remainingFilters;
      const lastRemainingValue = remainingVals[remainingVals.length - 1];
      
      setLastSelectedFilter({
        key: remainingKey,
        value: lastRemainingValue
      });
      
      if (remainingKey === 'levels' || remainingKey === 'categories' || remainingKey === 'specializations') {
        const filterItem = filters[remainingKey]?.find(item => {
          const itemValue = String(item.value || item.label).toLowerCase().trim();
          return itemValue === lastRemainingValue;
        });
        
        if (filterItem?.id) {
          fetchDynamicDescription(remainingKey, filterItem.id);
        }
      }
    } else {
      setLastSelectedFilter({ key: "", value: "" });
      setDynamicDescription("");
    }
  }
  
  // ✅✅✅ URL Navigation - SAME AS BEFORE ✅✅✅
  const params = new URLSearchParams();
  const keyMapping = {
    levels: 'level',
    categories: 'category',
    specializations: 'specialization',
    study_modes: 'study_mode',
    intakes: 'intake'
  };
  
  let pathFilter = filterType;
  let pathFilterValue = newValues.length > 0 ? newValues[newValues.length - 1] : null;
  
  if (!pathFilterValue) {
    const priorityOrder = ['levels', 'categories', 'specializations', 'intakes', 'study_modes'];
    for (const key of priorityOrder) {
      if (updatedFilters[key]?.length > 0) {
        pathFilter = key;
        pathFilterValue = updatedFilters[key][updatedFilters[key].length - 1];
        break;
      }
    }
  }
  
  Object.entries(updatedFilters).forEach(([key, vals]) => {
    if (vals.length > 0) {
      const paramKey = keyMapping[key];
      if (paramKey) {
        vals.forEach(val => {
          if (key !== pathFilter || val !== pathFilterValue) {
            const cleanValue = String(val).toLowerCase().replace(/\s+/g, '-');
            params.append(paramKey, cleanValue);
          }
        });
      }
    }
  });
  
  if (pathFilterValue) {
    const cleanSlug = String(pathFilterValue).toLowerCase().replace(/\s+/g, "-");
    const cleanPath = `/${cleanSlug}-courses`;
    const finalURL = params.toString() ? `${cleanPath}?${params.toString()}` : cleanPath;
    console.log("🔥 Navigating to:", finalURL);
    navigate(finalURL);
  } else {
    navigate('/courses-in-malaysia');
  }
  
  setCurrentPage(1);
};

  const toggleFilter = (key) => {
    setOpenFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };
const handleReset = () => {
  navigate('/courses-in-malaysia');
  
  setSearch("");
  setSelectedFilters({
    levels: [],        // ✅ Empty arrays
    categories: [],
    specializations: [],
    intakes: [],
    study_modes: [],
  });
  
  setLastSelectedFilter({ key: "", value: "" });
  setCurrentPage(1);
};
  const handleUniversityClick = (universityName) => {
    if (!universityName || typeof universityName !== "string") return;
    const slug = universityName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, ""); // special characters remove
    navigate(`/university/${slug}`);
  };


 const handleSearch = (value) => {
    const params = new URLSearchParams(location.search);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    navigate({ search: params.toString() });
    setCurrentPage(1);
  };
const handleSortChange = (e) => {
  const sortValue = e.target.value;
  setSortBy(sortValue);
  
  let sortedCourses = [...coursesData];
  
  switch(sortValue) {
    case 'rating':
      sortedCourses.sort((a, b) => (b.university?.rating || 0) - (a.university?.rating || 0));
      break;
    case 'fee-low':
      sortedCourses.sort((a, b) => {
        const feeA = parseFloat((a.fee || "0").replace(/[^0-9.]/g, ''));
        const feeB = parseFloat((b.fee || "0").replace(/[^0-9.]/g, ''));
        return feeA - feeB;
      });
      break;
    case 'fee-high':
      sortedCourses.sort((a, b) => {
        const feeA = parseFloat((a.fee || "0").replace(/[^0-9.]/g, ''));
        const feeB = parseFloat((b.fee || "0").replace(/[^0-9.]/g, ''));
        return feeB - feeA;
      });
      break;
    case 'duration':
      sortedCourses.sort((a, b) => {
        const durA = parseFloat((a.duration || "0").replace(/[^0-9.]/g, ''));
        const durB = parseFloat((b.duration || "0").replace(/[^0-9.]/g, ''));
        return durA - durB;
      });
      break;
    default: // relevance
      break;
  }
  
  setCoursesData(sortedCourses);
};

const handleViewDetail= (course) => {
  if (!course || !course.university?.name) return;
  
  const universitySlug = course.university.name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
  
  const courseSlug = course.slug || 
    (course.course_name ? 
      course.course_name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[()&]/g, "")
        .replace(/--+/g, "-")
        .trim()
      : null);
  
  if (!courseSlug) {
    console.error("Course slug missing");
    return;
  }
  
  // ✅ DIRECTLY COURSE DETAIL PAGE PE BHEJO
  navigate(`/university/${universitySlug}/courses/${courseSlug}`, {
    state: { 
      fromCoursesList: true,
      courseData: course 
    }
  });
};
const handleApplyNow = async (courseOrId) => {
  console.log("🔥 Apply Now clicked!", courseOrId);
  
  const token = localStorage.getItem("token");
  const courseId = typeof courseOrId === 'object' ? courseOrId.id : courseOrId;

  // ✅ Agar user logged in NAHI hai, to sign-up page pe redirect karo
  if (!token) {
    console.log("❌ No token found - Redirecting to sign-up");
    navigate(`/signup?program_id=${courseId}&redirect=courses`);
    return; // ⚠️ Yahan RETURN zaruri hai
  }

  // ✅ Agar user logged in HAI, to direct apply karo
  try {
    await api.get(`/student/apply-program/${courseId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Program applied successfully!");
    setAppliedCourses(prev => new Set(prev).add(courseId));
  } catch (error) {
    if (error.response?.status === 409) {
      toast.warn("You have already applied for this program.");
      setAppliedCourses(prev => new Set(prev).add(courseId));
    } else {
      console.error("Apply failed:", error);
      toast.error("Something went wrong while applying.");
    }
  }
};
const handleAddToCompare = (course) => {
  if (comparisonCourses.length >= 4) {
    toast.warn("You can compare maximum 4 courses");
    return;
  }
  if (comparisonCourses.find(c => c.id === course.id)) {
    toast.info("Course already added to comparison");
    return;
  }
  setComparisonCourses([...comparisonCourses, course]);
  toast.success("Course added to comparison");
};

const handleRemoveFromCompare = (courseId) => {
  setComparisonCourses(comparisonCourses.filter(c => c.id !== courseId));
};

const handleClearAll = () => {
  setComparisonCourses([]);
};

const handleCompare = () => {
  if (comparisonCourses.length < 2) {
    toast.warn("Please add at least 2 courses to compare");
    return;
  }
  setShowComparisonModal(true);
};
  const toggleShowMore = () => setShowMore(!showMore);
  return (
    <>
   <Helmet>
      {/* 🔹 Basic SEO */}
      <title>{seo?.meta_title}</title>
      <meta name="title" content={seo?.meta_title} />
      <meta name="description" content={seo?.meta_description} />
      <meta name="keywords" content={seo?.meta_keyword} />

      {/* 🔹 Robots */}
      <meta name="robots" content={seo?.robots || "index, follow"} />

      {/* 🔹 Canonical */}
      {seo?.page_url && <link rel="canonical" href={seo?.page_url} />}

      {/* 🔹 Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={seo?.meta_title} />
      <meta property="og:description" content={seo?.meta_description} />
      <meta property="og:image" content={seo?.og_image_path} />
      <meta property="og:url" content={seo?.page_url} />
      <meta property="og:site_name" content={seo?.site_name || "Study in Malaysia"} />
      <meta property="og:type" content={seo?.og_type || "website"} />
      <meta property="og:locale" content={seo?.og_locale || "en_US"} />
 {/* 🔹 SEO Rating (as meta) */}
      {seo?.seo_rating && <meta name="seo:rating" content={seo?.seo_rating} />}

      {/* 🔹 JSON-LD Schema (Structured Data) */}
      {seo?.seo_rating_schema && (
        <script type="application/ld+json">
          {JSON.stringify(seo.seo_rating_schema)}
        </script>
      )}
     
    </Helmet>

      {showCompareModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white rounded-2xl w-full max-w-6xl p-6 relative shadow-xl overflow-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setShowCompareModal(false)}
              className="absolute top-4 right-4 text-xl font-bold text-gray-700"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-6">
              Select a College & Course to Compare
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {compareList.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 shadow-md text-center"
                >
                  <img
                    src="https://www.educationmalaysia.in/uploads/university/IMG_20200821_124444.jpg"
                    alt="University Logo"
                    className="mx-auto h-20 mb-3"
                  />
                  <h3 className="text-md font-semibold text-gray-800">
                    {item.university}
                  </h3>
                  <p className="text-sm text-gray-500">{item.course}</p>
                  <p className="text-yellow-500 mt-2 font-semibold flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" /> {item.rating} Stars
                  </p>
                  <p className="text-sm text-gray-600 mt-2">{item.duration}</p>
                  <p className="text-sm text-gray-600">{item.intakes}</p>
                  <p className="text-sm text-green-600 mt-1">
                    Fee: {item.fee || "1 lakh"}
                  </p>

                <button
  className="mt-3 text-sm text-red-500 hover:text-red-700 hover:underline hover:scale-110 transition-all duration-200 cursor-pointer"
  onClick={() =>
    setCompareList(compareList.filter((_, i) => i !== index))
  }
>
  Remove
</button>
                </div>
              ))}

              {/* Add more */}
              {compareList.length < 3 && (
                <div className="flex flex-col justify-center items-center border-dashed border-2 rounded-xl p-4 text-center text-gray-500">
                  <span className="text-4xl font-bold">+</span>
                  <p>Add College</p>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
        <button
  onClick={handleCompare}
  disabled={comparisonCourses.length < 2}
  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
    comparisonCourses.length >= 2
      ? 'bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:scale-105 text-white cursor-pointer'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }`}
>
  🔍 Compare {comparisonCourses.length > 0 && `(${comparisonCourses.length})`}
</button>
           <button
  onClick={() => setCompareList([])}
  className="border border-gray-300 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 hover:border-gray-400 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
>
  Clear All
</button>
            </div>
          </div>
        </div>
      )}
<div className="w-full bg-blue-50 shadow-sm">
  <div className="max-w-screen-xl mx-auto px-4 py-3">
    <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
      <Link to="/" className="flex items-center gap-1 hover:underline hover:text-blue-500">
        <Home size={18} /> Home
      </Link>
      <span>/</span>
      <Link to="/courses-in-malaysia" className="flex items-center gap-1 hover:underline hover:text-blue-500">
        <Layers size={18} />
        Courses in Malaysia
      </Link>
      
      {/* ✅ URL path se filter name nikalo */}
      {(() => {
        const path = location.pathname;
        
        // Extract filter name from clean URL
        if (path.includes('-courses')) {
          const filterName = path
            .replace('/', '')
            .replace('-courses', '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
          
          return (
            <>
              <span>/</span>
              <span className="font-semibold text-blue-600">
                {filterName}
              </span>
            </>
          );
        }
        
        return null;
      })()}
    </div>
  </div>
</div>
  {/* Mobile Filter Drawer */}
  {showMobileFilter && (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
      <div className="w-4/5 max-w-xs bg-white p-5 rounded-r-xl shadow-xl h-full overflow-y-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            {activeFilterCount > 0 && (
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          <button
            className="text-2xl font-bold text-gray-600 hover:text-gray-900"
            onClick={() => setShowMobileFilter(false)}
          >
            ×
          </button>
        </div>

        {activeFilterCount > 0 && (
         <button
  onClick={() => {
    handleReset();
    setShowMobileFilter(false);
  }}
  className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline"
>
  Clear All Filters
</button>
        )}

        {/* Mobile Filters */}
        <div className="space-y-2">
          {Object.entries(filters).map(([key, items]) => (
            <div key={key} className="border-b border-gray-100 last:border-0 pb-2">
              <button
                onClick={() => toggleFilter(key)}
                className="w-full flex items-center justify-between py-2 text-left hover:bg-gray-50 rounded-lg px-2"
              >
                <span className="font-semibold text-gray-900 capitalize flex items-center gap-2">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
                 {selectedFilters[key].length > 0 && ( // ✅ Array length check
  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
    {selectedFilters[key].length} {/* ✅ Total count */}
  </span>
)}
                </span>
                {openFilters[key] ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {openFilters[key] && (
                <div className="mt-2 space-y-2 pl-2 max-h-56 overflow-y-auto">
                 {items.map((item) => {
  const value = item.value || item.slug || item.name || item.month || item.study_mode || item;
  const display = item.label || item.name || item.slug || item.month || item.study_mode || item;
                    return (
<label
  key={item.id || value}
  className="flex items-center gap-2 py-1.5 cursor-pointer hover:bg-blue-50 rounded-lg pl-0 pr-2 transition-all group"
>
  <input
    type="checkbox"
    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
   checked={selectedFilters[key].includes(String(value).toLowerCase().trim())} 
 onChange={() => {
  const normalizedValue = String(value).toLowerCase().trim();
  handleFilterChange(key, normalizedValue);
}}
  />
  <span className="text-gray-700 text-sm font-medium group-hover:text-blue-700 text-left">
    {display}
  </span>
</label>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1" onClick={() => setShowMobileFilter(false)}></div>
    </div>
  )}

        {/* Course List Section */}
        {/* New Modern Header */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-4 min-h-screen">
      <div className="bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-[1600px] mx-auto px-4 py-2">

  {/* ✅ FILTER & COURSES - NEECHE */}

  <div className="flex flex-col lg:flex-row gap-6 items-start">
    {/* Mobile Filter Button */}
   
<div className="lg:hidden flex justify-end mb-4">
      <button
        className="bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md"
        onClick={() => setShowMobileFilter(true)}
      >
        Filters
      </button>
    </div>

    {/* Filter Panel */}
    <>
    {loading ? <FilterPanelSkeleton /> : (
      // <div className="hidden lg:block w-[280px] min-w-[280px] flex-shrink-0 bg-white border border-gray-200 p-5 rounded-xl shadow-md space-y-6 text-base">
      <div className="hidden lg:block w-[280px] min-w-[280px] flex-shrink-0 bg-white border border-gray-200 p-5 rounded-xl shadow-md space-y-6 text-base sticky top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-hide">
     <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
        <Filter className="w-5 h-5 text-blue-600" />
        Filters
        
          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {activeFilterCount}
          </span>
    
      </h2>
      {activeFilterCount > 0 && (
        <button
          onClick={handleReset}
          className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors hover:underline"
        >
          Clear All
        </button>
      )}
    </div>

    {/* Filter Options */}
    <div className="space-y-2">
      {Object.entries(filters).map(([key, items]) => (
        <div key={key} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
          <button
            onClick={() => toggleFilter(key)}
            className="w-full flex items-center justify-between py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
          >
            <span className="font-semibold text-gray-900 capitalize flex items-center gap-2">
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
             {selectedFilters[key]?.length > 0 && (
  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
    {selectedFilters[key].length}
  </span>
)}
            </span>
            {openFilters[key] ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openFilters[key] && (
            <div className="mt-2 space-y-2 pl-2 max-h-56 overflow-y-auto">
              {items.map((item) => {
                const value = item.value || item.slug || item.name || item.month || item.study_mode || item;
                const display = item.label || item.name || item.slug || item.month || item.study_mode || item;
                return (
<label
  key={item.id || value}
  className="flex items-center gap-2 py-1.5 cursor-pointer hover:bg-blue-50 rounded-lg pl-0 pr-2 transition-all group"
>
  <input
    type="checkbox"
    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
  checked={selectedFilters[key].includes(String(value).toLowerCase().trim())}  
   onChange={() => {
  const normalizedValue = String(value).toLowerCase().trim();
  handleFilterChange(key, normalizedValue);
}}
  />
  <span className="text-gray-700 text-sm font-medium group-hover:text-blue-700 text-left">
    {display}
  </span>
</label>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
      </div>
    )}
     </>

    {/* Course List */}

{/* <div className="flex-1 min-w-0 max-w-full space-y-6"> */}

{/* <div className="flex-1 min-w-0 max-w-full space-y-6"> */}
{/* Course List */}
<div className="flex-1 min-w-0 max-w-full space-y-6 courses-content-wrapper">

{/* ✅✅✅ YAHAN PASTE KARO - HEADER SECTION ✅✅✅ */}
<div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
    <div className="flex flex-col gap-3">
      {/* Top Row - Title */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Find Your Perfect Course</h1>
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-blue-600">{totalCourses}</span>
             {' '}  
            {lastSelectedFilter.value && (
              <>
                {' '}
                <span className="font-semibold text-blue-600 uppercase">
                  {lastSelectedFilter.value.replace(/-/g, ' ')}
                </span>
                {' '}
              </>
            )}
            courses available in Malaysia
          </p>
        </div>
      </div>

      {/* Description Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-2 shadow-sm">
        
  {(() => {
  const CHAR_LIMIT = 450;
  
  // ✅ CHECK: Filter applied hai ya nahi
  const hasFilters = 
    selectedFilters.levels?.length > 0 || 
    selectedFilters.categories?.length > 0 || 
    selectedFilters.specializations?.length > 0 ||
    selectedFilters.intakes?.length > 0 ||
    selectedFilters.study_modes?.length > 0;
  
  const getSmartContent = (text) => {
    if (!text) return null;
    
    // ✅ Agar NO filters, to button NAHI chahiye
    if (!hasFilters) {
      return {
        text: text, // Full text
        showButton: false
      };
    }
    
    // ✅ Filters applied hain, to smart logic
    const needsButton = text.length > CHAR_LIMIT;
    return {
      text: needsButton ? (showMore ? text : text.slice(0, CHAR_LIMIT) + "...") : text,
      showButton: needsButton
    };
  };
  
  if (dynamicDescription) {
    const content = getSmartContent(dynamicDescription);
    return (
      <>
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {content.text}
        </p>
        {content.showButton && (
          <button
            onClick={toggleShowMore}
            className="mt-3 text-blue-600 text-sm font-semibold hover:underline focus:outline-none flex items-center gap-1"
          >
            {showMore ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show More <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        )}
      </>
    );
  }
  
  const path = location.pathname;
  let pathDescription = '';
  
  if (path.includes('pre-university')) {
    pathDescription = `Discover a list of ${totalCourses} PRE-UNIVERSITY courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering PRE-UNIVERSITY degree programs. Enroll directly in PRE-UNIVERSITY courses through EducationMalaysia.in.`;
  } 
  else if (path.includes('diploma')) {
    pathDescription = `Discover a list of ${totalCourses} DIPLOMA courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering DIPLOMA degree programs. Enroll directly in DIPLOMA courses through EducationMalaysia.in.`;
  }
  else if (path.includes('under-graduate')) {
    pathDescription = `Discover a list of ${totalCourses} UNDER-GRADUATE courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering UNDER-GRADUATE degree programs. Enroll directly in UNDER-GRADUATE courses through EducationMalaysia.in.`;
  }
  else if (path.includes('post-graduate-diploma')) {
    pathDescription = `Discover a list of ${totalCourses} POST-GRADUATE-DIPLOMA courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering POST-GRADUATE-DIPLOMA degree programs. Enroll directly in POST-GRADUATE-DIPLOMA courses through EducationMalaysia.in.`;
  }
  else if (path.includes('post-graduate')) {
    pathDescription = `Discover a list of ${totalCourses} POST-GRADUATE courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering POST-GRADUATE degree programs. Enroll directly in POST-GRADUATE courses through EducationMalaysia.in.`;
  }
  else if (path.includes('a-levels')) {
    pathDescription = `Discover a list of ${totalCourses} A-LEVELS courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering A-LEVELS degree programs. Enroll directly in A-LEVELS courses through EducationMalaysia.in.`;
  }
  else if (path.includes('certificate')) {
    pathDescription = `Discover a list of ${totalCourses} CERTIFICATE courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering CERTIFICATE degree programs. Enroll directly in CERTIFICATE courses through EducationMalaysia.in.`;
  }
  else if (path.includes('business-and-management')) {
    pathDescription = `Discover a list of ${totalCourses} BUSINESS AND MANAGEMENT courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering BUSINESS AND MANAGEMENT degree programs. Enroll directly in BUSINESS AND MANAGEMENT courses through EducationMalaysia.in.`;
  }
  else if (path.includes('creative-arts-and-design')) {
    pathDescription = `Discover a list of ${totalCourses} CREATIVE ARTS AND DESIGN courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering CREATIVE ARTS AND DESIGN degree programs. Enroll directly in CREATIVE ARTS AND DESIGN courses through EducationMalaysia.in.`;
  }
  else if (path.includes('education-and-training')) {
    pathDescription = `Discover a list of ${totalCourses} EDUCATION AND TRAINING courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering EDUCATION AND TRAINING degree programs. Enroll directly in EDUCATION AND TRAINING courses through EducationMalaysia.in.`;
  }
  else if (path.includes('engineering-and-technology')) {
    pathDescription = `Discover a list of ${totalCourses} ENGINEERING AND TECHNOLOGY courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering ENGINEERING AND TECHNOLOGY degree programs. Enroll directly in ENGINEERING AND TECHNOLOGY courses through EducationMalaysia.in.`;
  }
  else if (path.includes('computer-science')) {
    pathDescription = `Discover a list of ${totalCourses} COMPUTER SCIENCE courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering COMPUTER SCIENCE degree programs. Enroll directly in COMPUTER SCIENCE courses through EducationMalaysia.in.`;
  }
  else if (path.includes('medicine-and-health')) {
    pathDescription = `Discover a list of ${totalCourses} MEDICINE AND HEALTH courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering MEDICINE AND HEALTH degree programs. Enroll directly in MEDICINE AND HEALTH courses through EducationMalaysia.in.`;
  }
  else if (path.includes('full-time')) {
    pathDescription = `Discover a list of ${totalCourses} FULL-TIME courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering FULL-TIME degree programs. Enroll directly in FULL-TIME courses through EducationMalaysia.in.`;
  }
  else if (path.includes('part-time')) {
    pathDescription = `Discover a list of ${totalCourses} PART-TIME courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering PART-TIME degree programs. Enroll directly in PART-TIME courses through EducationMalaysia.in.`;
  }
  else if (path.includes('online')) {
    pathDescription = `Discover a list of ${totalCourses} ONLINE courses offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering ONLINE degree programs. Enroll directly in ONLINE courses through EducationMalaysia.in.`;
  }
  else if (path.includes('january')) {
    pathDescription = `Discover a list of ${totalCourses} courses with JANUARY intake offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering courses with JANUARY intake. Enroll directly in courses through EducationMalaysia.in.`;
  }
  else if (path.includes('february')) {
    pathDescription = `Discover a list of ${totalCourses} courses with FEBRUARY intake offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering courses with FEBRUARY intake. Enroll directly in courses through EducationMalaysia.in.`;
  }
  else if (path.includes('march')) {
    pathDescription = `Discover a list of ${totalCourses} courses with MARCH intake offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering courses with MARCH intake. Enroll directly in courses through EducationMalaysia.in.`;
  }
  else if (path.includes('april')) {
    pathDescription = `Discover a list of ${totalCourses} courses with APRIL intake offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering courses with APRIL intake. Enroll directly in courses through EducationMalaysia.in.`;
  }
  else if (path.includes('may')) {
    pathDescription = `Discover a list of ${totalCourses} courses with MAY intake offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering courses with MAY intake. Enroll directly in courses through EducationMalaysia.in.`;
  }
  else if (path.includes('september')) {
    pathDescription = `Discover a list of ${totalCourses} courses with SEPTEMBER intake offered by the Top universities and colleges in Malaysia. Gather valuable information such as entry requirements, fee structures, intake schedules for 2025, study modes, and recommendations for the best universities and colleges offering courses with SEPTEMBER intake. Enroll directly in courses through EducationMalaysia.in.`;
  }
  else {
    pathDescription = infoText;
  }
  
  const content = getSmartContent(pathDescription);
  return (
    <>
      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
        {content.text}
      </p>
      {content.showButton && (
        <button
          onClick={toggleShowMore}
          className="mt-3 text-blue-600 text-sm font-semibold hover:underline focus:outline-none flex items-center gap-1"
        >
          {showMore ? (
            <>Show Less <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>Show More <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      )}
    </>
  );
})()}
      </div>

      {/* Sort + Search + View Toggle */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-3 border-t border-gray-200">
        
        {/* Left: Sort by */}
        <div className="flex items-center gap-2 flex-wrap">
          <ArrowUpDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Sort by:</span>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="flex-1 sm:flex-none px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors font-medium text-sm bg-white cursor-pointer hover:border-gray-300"
          >
            <option value="rating">Highest Rated</option>
            <option value="duration">Duration</option>
          </select>
        </div>

        {/* Right: Search + Toggle */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Bar */}
          <div className="relative w-full sm:w-64 md:w-80">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={getSearchPlaceholder()} 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(search);
                }
              }}
              className="w-full pl-12 pr-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors font-medium text-sm"
            />
          </div>

          {/* List/Grid Toggle */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1 self-center sm:self-auto">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="List View"
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>



     
    {/* ✅ Active Filters Display */}
{Object.values(selectedFilters).some((filter) => filter.length > 0) && (
  <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
        <Filter className="w-4 h-4 text-blue-600" />
        Active Filters
      </h3>
      <button
        onClick={handleReset}
        className="text-sm text-red-600 hover:text-red-700 font-semibold hover:underline"
      >
        Clear All
      </button>
    </div>
    
    <div className="flex flex-wrap gap-2">
    {Object.entries(selectedFilters).map(([key, values]) => {
      if (!values || values.length === 0) return null; // ✅ Array check
      
      return values.map((value) => { // ✅ Map over array
        const displayName = value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const filterLabel = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
        
        return (
          <div
            key={`${key}-${value}`} // ✅ Unique key
            className="flex items-center gap-2 bg-blue-50 border-2 border-blue-200 rounded-lg px-3 py-1.5 text-sm"
          >
            <span className="font-semibold text-gray-700">{filterLabel}:</span>
            <span className="text-blue-700">{displayName}</span>
            <button
              onClick={() => handleFilterChange(key, value)}
              className="text-gray-500 hover:text-red-600 transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      });
    })}
    </div> 
  </div>   
)}

      {/* Course Cards */}
      {/* Course Cards with Grid/List Toggle */}
{loading ? (

<div className={`${viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"} courses-grid-wrapper ${comparisonCourses.length > 0 ? 'with-compare' : ''}`}>
    {[...Array(5)].map((_, i) => <CourseCardSkeleton key={i} />)}
  </div>
) : (

<div className={`${viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"} courses-grid-wrapper ${comparisonCourses.length > 0 ? 'with-compare' : ''}`}>
    {coursesData.map((course, i) => (
      <div 
        key={i} 
        className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-300 group relative ${
          viewMode === 'grid' ? 'flex flex-col h-full' : 'mb-6 w-full'
        }`}
      >
        <div className="p-5">
          {/* University Header */}
          {/* <div className={`flex ${viewMode === 'grid' ? 'flex-col' : 'items-start justify-between'} gap-3 mb-4`}> */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-4">
            <div className={`flex gap-4 ${viewMode === 'grid' ? 'w-full' : 'flex-1'}`}>
              {/* Logo */}
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200 shadow-sm overflow-hidden">
                <img 
                  src={`https://www.educationmalaysia.in/storage/${course.university?.logo_path}`}
                  alt={course.university?.name} 
                  className="w-full h-full object-contain p-2" 
                />
              </div>

              {/* University Info */}
  <div className="flex-1 min-w-0">
  <h3 
    onClick={() => handleUniversityClick(course.university?.name)}
    className="text-base sm:text-lg font-bold text-gray-900 mb-1 hover:text-blue-600 cursor-pointer transition-colors line-clamp-1"
  >
  {course.university?.name}
</h3>
                <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-2">
    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                  <span className="line-clamp-1">{`${course.university?.city}, ${course.university?.state}`}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-1" />
                    <span>{course.university?.inst_type || "Private"}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>{course.university?.programs_count} Courses</span>
                  </div>
<div className="flex items-center gap-2 flex-wrap">
  <Globe className="w-4 h-4 text-gray-600 flex-shrink-0" />
  <div className="flex flex-wrap gap-2 text-xs">
    {course.university?.qs_rank && (
      <span className="bg-purple-50 text-purple-700 font-semibold px-2 py-1 rounded border border-purple-200">
        QS: #{course.university.qs_rank}
      </span>
    )}
    {course.university?.times_rank && (
      <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-1 rounded border border-blue-200">
        Times: #{course.university.times_rank}
      </span>
    )}
    {course.university?.qs_asia_rank && (
      <span className="bg-amber-50 text-amber-700 font-semibold px-2 py-1 rounded border border-amber-200">
        Asia: #{course.university.qs_asia_rank}
      </span>
    )}
    {!course.university?.qs_rank && !course.university?.times_rank && !course.university?.qs_asia_rank && (
      <span className="text-gray-500 italic">N/A</span>
    )}
  </div>
</div>
                </div>
              </div>
            </div>

            {/* Rating & Heart */}
            {/* <div className={`flex items-center gap-3 flex-shrink-0 ${viewMode === 'grid' ? 'w-full justify-between mt-2' : ''}`}> */}
            <div className="flex items-center gap-3 flex-wrap w-full sm:w-auto sm:flex-shrink-0">
      
 {/* ✅ CORRECTED VERSION - Course level pe check karo */}
<div className="flex gap-2">
  {course.is_local === 1 && (
    <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 shadow-sm">
      <Home className="w-4 h-4 text-blue-600" />
      <span className="text-xs font-semibold text-blue-700">Local</span>
    </div>
  )}
  {course.is_international === 1 && (
    <div className="flex items-center gap-1.5 bg-green-50 px-3 py-1.5 rounded-lg border border-green-200 shadow-sm">
      <Globe className="w-4 h-4 text-green-600" />
      <span className="text-xs font-semibold text-green-700">International</span>
    </div>
  )}
  {course.is_local === 0 && course.is_international === 0 && (
    <span className="text-xs text-gray-500 italic">N/A</span>
  )}
</div>

              <div className="flex items-center gap-1 bg-gradient-to-br from-amber-50 to-yellow-50 px-3 py-2 rounded-lg border border-amber-200 shadow-sm">
                <span className="text-lg font-bold text-gray-900">{course.university?.rating || "N/A"}</span>
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>

             
            </div>
          </div>

          {/* Course Details Section */}
          <div className="border-t border-gray-200 pt-3 mb-3">
            {/* Course Title */}
            
      
<h4 
  onClick={() => handleViewDetail(course)}  // ✅ 
  className="text-base font-bold text-blue-600 mb-3 hover:text-blue-700 cursor-pointer transition-colors line-clamp-2"
>
  {course.course_name}
</h4>

            

            {/* Course Specs Grid */}
            {/* <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2' : 'grid-cols-4'} gap-2 mb-3`}> */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 mb-3`}>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex flex-col justify-center">
                <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Mode</p>
                <p className="text-sm font-bold text-gray-900 line-clamp-1">{course.study_mode || "N/A"}</p>
              </div>
             <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex flex-col justify-center min-h-[80px]">
  <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Duration</p>
  <p className="text-sm font-bold text-gray-900 break-words leading-tight">{course.duration || "N/A"}</p>
</div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex flex-col justify-center min-h-[80px]">
    <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Intakes</p>
    <p className="text-sm font-bold text-gray-900 break-words leading-tight">
      {course.intake || "N/A"}
    </p>
  </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex flex-col justify-center">
                <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Tution Fee</p>
                <p className="text-sm font-bold text-gray-900 line-clamp-1">{course.fee || "N/A"}</p>
              </div>
            </div>
          </div>
          {/* Accreditation Badges - ALWAYS SHOW */}
{/* Accreditation Badges - Line ~650 ke around */}
<div className="flex flex-wrap gap-2 mb-3">
  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-300 whitespace-nowrap">
    Malaysian Medical Council
  </span>
  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-300 whitespace-nowrap">
    MQA
  </span>
</div>
          
{/* Action Buttons */}
<div className={`flex ${viewMode === 'grid' ? 'flex-col' : 'items-center'} gap-3`}>
  {/* Apply Now Button */}
  <button
    onClick={() => !appliedCourses.has(course.id) && handleApplyNow(course)}
    className={`${viewMode === 'grid' ? 'w-full' : 'flex-1'} font-bold py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm ${
      appliedCourses.has(course.id) 
        ? "bg-gray-400 text-white cursor-not-allowed" 
        : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
    }`}
    disabled={appliedCourses.has(course.id)}
  >
    {appliedCourses.has(course.id) ? "Applied" : "Apply Now"}
  </button>

  {/* View Details & Compare - Conditional Layout */}
  {viewMode === 'grid' ? (
    // Grid View: Side by Side
    <div className="grid grid-cols-2 gap-3 w-full">
      <button
        onClick={() => handleViewDetail(course)}
        className=" cursor-pointer bg-white text-gray-800 font-bold py-2.5 px-4 rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md text-sm"
      >
        View Details
      </button>
      <button
        onClick={() => handleAddToCompare(course)}
        className=" cursor-pointer font-bold py-2.5 px-4 rounded-lg border-2 transition-all duration-200 shadow-sm hover:shadow-md bg-white text-blue-600 border-blue-300 hover:border-blue-400 hover:bg-blue-50 text-sm"
      >
        Compare
      </button>
    </div>
  ) : (
    // List View: Original Layout (separate buttons)
    <>
      <button
        onClick={() => handleViewDetail(course)}
        className=" cursor-pointer  flex-1 bg-white text-gray-800 font-bold py-2.5 px-4 rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md text-sm"
      >
        View Details
      </button>
      <button
        onClick={() => handleAddToCompare(course)}
        className=" cursor-pointer  font-bold py-2.5 px-4 rounded-lg border-2 transition-all duration-200 shadow-sm hover:shadow-md bg-white text-blue-600 border-blue-300 hover:border-blue-400 hover:bg-blue-50 text-sm"
      >
        Compare
      </button>
    </>
  )}
</div>
        </div>
      </div>
    ))}
  </div>
)}
   {comparisonCourses.length > 0 && (
<div className="compare-bar-fixed compare-bar-active bg-white border-t-2 border-gray-200 shadow-2xl">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
    
    {/* ========== MOBILE LAYOUT ========== */}
    <div className="flex flex-col gap-3 sm:hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900 text-sm">Compare Courses</span>
          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {comparisonCourses.length}
          </span>
        </div>
        <button
          onClick={handleClearAll}
          className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
        >
          <X className="w-3 h-3" />
          Clear
        </button>
      </div>

      {/* Course Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {comparisonCourses.map((course) => (
          <div
            key={course.id}
            className="flex items-center gap-2 bg-blue-50 border-2 border-blue-200 rounded-lg px-3 py-2 flex-shrink-0 min-w-[200px]"
          >
            <div className="text-xs flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">
                {course.course_name}
              </p>
              <p className="text-xs text-gray-600 truncate">{course.university?.name}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCompare(course.id)}
              className="text-gray-600 hover:text-red-600 transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Compare Button */}
      <button
        onClick={handleCompare}
        disabled={comparisonCourses.length < 2}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold transition-all shadow-md text-sm ${
          comparisonCourses.length >= 2
            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Compare Now
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>

    {/* ========== DESKTOP LAYOUT - SAME AS MOBILE ========== */}
    <div className="hidden sm:flex sm:flex-col gap-3">
      {/* ✅ Row 1: Title LEFT + Clear All RIGHT */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900">Compare Courses</span>
          <span className="bg-blue-600 text-white text-sm font-bold px-2.5 py-0.5 rounded-full">
            {comparisonCourses.length}
          </span>
        </div>
        
        {/* ✅ Clear All - TOP RIGHT SMALL */}
        <button
          onClick={handleClearAll}
          className="text-sm text-red-600 hover:text-red-700 font-semibold flex items-center gap-1.5 px-3 py-1.5 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-all"
        >
          Clear All
        </button>
      </div>

      {/* ✅ Row 2: Course Pills - Horizontal Scroll */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {comparisonCourses.map((course) => (
          <div
            key={course.id}
            className="flex items-center gap-3 bg-blue-50 border-2 border-blue-200 rounded-xl px-4 py-2.5 flex-shrink-0"
          >
            <div className="text-sm">
              <p className="font-semibold text-gray-900 truncate max-w-[220px]">
                {course.course_name}
              </p>
              <p className="text-xs text-gray-600 truncate">{course.university?.name}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCompare(course.id)}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Row 3: Compare Button - Full Width */}
      <button
        onClick={handleCompare}
        disabled={comparisonCourses.length < 2}
        className={`w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all shadow-md ${
          comparisonCourses.length >= 2
            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-lg'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Compare Now
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>

  </div>
</div>
)}
    
        
 {/* ✅ MOBILE RESPONSIVE Pagination */}
<div className="flex justify-center items-center gap-2 mt-6 px-4 overflow-x-auto pb-2 scrollbar-hide">
  <div className="flex items-center gap-2 min-w-max">
    {paginationLinks.map((link, idx) => {
      const isDisabled = link.url === null;
      const isActive = !!link.active;

      // Label cleanup
      const label = link.label
        .replace("&laquo;", "«")
        .replace("&raquo;", "»");

      // ✅ MOBILE PE SIRF IMPORTANT PAGES DIKHAO
      const pageNumber = parseInt(label);
      const showOnMobile = 
        label.includes("Previous") || 
        label.includes("Next") ||
        label === "..." ||
        isActive || // Current page
        pageNumber === 1 || // First page
        pageNumber === lastPage || // Last page
        Math.abs(pageNumber - currentPage) <= 1; // Adjacent pages

      // Icon check
      let content = label;
      if (label.includes("Previous")) {
        content = <HiChevronLeft size={20} />;
      } else if (label.includes("Next")) {
        content = <HiChevronRight size={20} />;
      }

      return (
        <button
          key={`${label}-${idx}`}
       onClick={() => {
  if (!isDisabled && link.url) {
    const url = new URL(link.url);
    const page = url.searchParams.get('page');
    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
  }
}}
          disabled={isDisabled}
          className={`
            min-w-[40px] h-10 rounded-full flex items-center justify-center border text-sm font-semibold transition-all duration-200
            ${isActive ? "bg-blue-600 text-white border-blue-600 shadow-md" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"}
            ${isDisabled ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-200" : "cursor-pointer"}
            ${!showOnMobile ? "hidden sm:flex" : "flex"}
          `}
        >
          {content}
        </button>
      );
    })}
  </div>
</div>
    </div>
  </div>
  </div> 
</div> 
</div>

     {showComparisonModal && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[85vh] overflow-y-auto my-auto relative">
      {/* Header - NOT STICKY */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-t-2xl flex justify-between items-center shadow-lg">
        <h2 className="text-xl font-bold">Course Comparison</h2>
        <button
          onClick={() => setShowComparisonModal(false)}
    className="text-white hover:text-gray-200  bg-opacity-30 hover:bg-opacity-40 rounded-lg p-2 flex-shrink-0"
          aria-label="Close"
        >
          {/* <X className="w-5 h-5" /> */}
        </button>
      </div>

      {/* Table Container with separate scroll */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[900px]">
          {/* Sticky Header */}
          <thead className="  bg-white z-20 shadow-md">
            <tr className="bg-gray-100 border-b-2 border-gray-300">
              <th className="text-left p-4 font-bold text-gray-900 w-48 min-w-[192px] text-sm bg-gray-100 sticky left-0 z-30 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                Feature
              </th>
              {comparisonCourses.map((course) => (
                <th key={course.id} className="p-4 text-left min-w-[320px] bg-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm leading-tight line-clamp-2">
                    {course.course_name}
                  </h3>
                  <p className="text-xs font-normal text-gray-600 line-clamp-1">
                    {course.university?.name}
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Rating Row */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-semibold text-gray-700 bg-gray-50 text-sm ">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Rating</span>
                </div>
              </td>
              {comparisonCourses.map((course) => (
                <td key={course.id} className="p-4 bg-white">
                  <div className="flex items-center gap-1">
                    <span className="text-base font-bold text-gray-900">
                      {course.university?.rating || "N/A"}
                    </span>
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </div>
                </td>
              ))}
            </tr>

            {/* Duration Row */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-semibold text-gray-700 bg-gray-50 text-sm ">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Duration</span>
                </div>
              </td>
              {comparisonCourses.map((course) => (
                <td key={course.id} className="p-4 font-medium text-gray-900 text-sm bg-white">
                  {course.duration || "N/A"}
                </td>
              ))}
            </tr>

            {/* Fee Row */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-semibold text-gray-700 bg-gray-50 text-sm ">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Fee</span>
                </div>
              </td>
              {comparisonCourses.map((course) => (
                <td key={course.id} className="p-4 font-medium text-gray-900 text-sm bg-white">
                  {course.fee || "N/A"}
                </td>
              ))}
            </tr>

            {/* Intake Row */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-semibold text-gray-700 bg-gray-50 text-sm ">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Intake</span>
                </div>
              </td>
              {comparisonCourses.map((course) => (
                <td key={course.id} className="p-4 font-medium text-gray-900 text-sm bg-white">
                  {course.intake || "N/A"}
                </td>
              ))}
            </tr>

            {/* Study Mode Row */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-semibold text-gray-700 bg-gray-50 text-sm ">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Study Mode</span>
                </div>
              </td>
              {comparisonCourses.map((course) => (
                <td key={course.id} className="p-4 font-medium text-gray-900 text-sm bg-white">
                  {course.study_mode || "N/A"}
                </td>
              ))}
            </tr>

            {/* Location Row */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-semibold text-gray-700 bg-gray-50 text-sm ">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Location</span>
                </div>
              </td>
              {comparisonCourses.map((course) => (
                <td key={course.id} className="p-4 text-gray-700 text-sm bg-white">
                  {`${course.university?.city}, ${course.university?.state}`}
                </td>
              ))}
            </tr>

            {/* University Type Row */}
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-semibold text-gray-700 bg-gray-50 text-sm ">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>University Type</span>
                </div>
              </td>
              {comparisonCourses.map((course) => (
                <td key={course.id} className="p-4 text-gray-700 text-sm bg-white">
                  {course.university?.inst_type || "N/A"}
                </td>
              ))}
            </tr>

            {/* Ranking Row */}
         {/* Ranking Row - ENHANCED */}
<tr className="border-b border-gray-200 hover:bg-gray-50">
  <td className="p-4 font-semibold text-gray-700 bg-gray-50 text-sm">
    <div className="flex items-center gap-2">
      <Award className="w-4 h-4 text-purple-600 flex-shrink-0" />
      <span>Rankings</span>
    </div>
  </td>
  {comparisonCourses.map((course) => (
    <td key={course.id} className="p-4 text-gray-700 text-sm bg-white">
      <div className="space-y-1">
        {course.university?.qs_rank && (
          <div className="text-sm">
            <span className="font-semibold">QS World:</span> #{course.university.qs_rank}
          </div>
        )}
        {course.university?.times_rank && (
          <div className="text-sm">
            <span className="font-semibold">Times:</span> #{course.university.times_rank}
          </div>
        )}
        {course.university?.qs_asia_rank && (
          <div className="text-sm">
            <span className="font-semibold">QS Asia:</span> #{course.university.qs_asia_rank}
          </div>
        )}
        {!course.university?.qs_rank && !course.university?.times_rank && !course.university?.qs_asia_rank && (
          <span className="text-gray-500 italic">N/A</span>
        )}
      </div>
    </td>
  ))}
</tr>
            {/* ✅ Accreditation Row - YE NAYA ADD KARO */}
<tr className="border-b border-gray-200 hover:bg-gray-50">
  <td className="p-4 font-semibold text-gray-700 bg-gray-50 text-sm">
    <div className="flex items-center gap-2">
      <Award className="w-4 h-4 text-green-600 flex-shrink-0" />
      <span>Accreditation</span>
    </div>
  </td>
  {comparisonCourses.map((course) => (
    <td key={course.id} className="p-4 text-gray-700 text-sm bg-white">
      <div className="flex flex-wrap gap-2">
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-300 inline-block">
          Malaysian Medical Council
        </span>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-300 inline-block">
          MQA
        </span>
      </div>
    </td>
  ))}
</tr>

            {/* Actions Row */}
            <tr className="bg-gray-50">
              <td className="p-4 font-semibold text-gray-700 text-sm ">
                Actions
              </td>
              {comparisonCourses.map((course) => (
                <td key={course.id} className="p-4 bg-gray-50">
                  <button 
                    onClick={() => handleApplyNow(course)}
                    className=" cursor-pointer  w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg text-sm"
                  >
                    Apply Now
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0">
        <button
          onClick={() => setShowComparisonModal(false)}
          className=" cursor-pointer  w-full px-5 py-2.5 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          Close Comparison
        </button>
      </div>
    </div>
  </div>
)}


</>   

  );
};

export default Courses;
