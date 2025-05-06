import React, { useState, useEffect, useRef } from 'react';
import '../styles/TimeMachine.css';

const TimeMachine = () => {
    const [activeYear, setActiveYear] = useState(2024);
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showStarField, setShowStarField] = useState(false);
    const timelineRef = useRef(null);
    const handleRef = useRef(null);
    const dragStartYRef = useRef(0);
    const dragStartHandleTopRef = useRef(0);
    const containerRef = useRef(null);

    // Years from 2010 to current year (in reverse order with years[0] being the most recent - "Now")
    const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

    // Categories
    const categories = [
        { id: 'academic', name: 'Academic', color: '#5ac8fa', icon: 'graduation-cap' },
        { id: 'books', name: 'Books', color: '#ff9500', icon: 'book' },
        { id: 'activity', name: 'Activity', color: '#4cd964', icon: 'person-running' },
        { id: 'development', name: 'Software Development', color: '#ff3b30', icon: 'code' },
    ];

    // Timeline data - events
    const timelineData = [
        {
            id: 'handong-admission',
            title: '한동대학교 입학',
            category: 'academic',
            date: '2011-03-01',
            year: 2011,
            content: `
        <img src="${process.env.PUBLIC_URL}/images/handong-university.jpg" alt="한동대학교" />
        <p>2011년 3월, 한동대학교에 입학하여 새로운 학문적 여정을 시작했습니다. 한동대학교는 '工學'과 '工學'의 결합을 통해 융합적 사고를 지향하는 교육 철학을 갖고 있어 지원하게 되었습니다.</p>
        <p>이곳에서의 경험은 단순한 전공 지식을 넘어 인성과 리더십을 함양하는 소중한 시간이 되었습니다.</p>
      `,
        },
        {
            id: 'stranger-book',
            title: '이방인 - 알베르 카뮈',
            category: 'books',
            date: '2024-02-15',
            year: 2024,
            content: `
        <img src="${process.env.PUBLIC_URL}/images/the-stranger.jpg" alt="이방인 - 알베르 카뮈" />
        <p>알베르 카뮈의 '이방인'은 프랑스 실존주의 문학의 대표작으로, 주인공 뫼르소의 이야기를 통해 삶의 부조리성과 실존에 대한 깊은 성찰을 다룹니다.</p>
        <p>소설 속 뫼르소의 무관심과 감정의 결여는 사회적 규범과 기대에 반하는 모습을 보여주며, 이는 독자로 하여금 인간 존재의 본질과 사회적 가치에 대해 재고하게 합니다.</p>
        <p>이 작품을 통해 인간의 자유와 책임, 그리고 삶의 의미에 대한 깊은 질문을 마주하게 되었습니다.</p>
      `,
        },
        {
            id: 'hwaseong-marathon',
            title: '화성시 경기 가족 마라톤',
            category: 'activity',
            date: '2024-04-20',
            year: 2024,
            content: `
        <img src="${process.env.PUBLIC_URL}/images/hwaseong-marathon.jpg" alt="화성시 경기 가족 마라톤" />
        <p>2024년 4월 20일, 화성시에서 개최된 경기 가족 마라톤 대회에 참가했습니다. 10km 코스를 완주하며 건강한 신체와 정신을 단련하는 좋은 기회였습니다.</p>
        <p>마라톤은 단순한 체력 활동을 넘어 인내와 끈기를 기르는 훌륭한 활동이라고 생각합니다. 특히 가족과 함께한 이번 대회는 더욱 특별한 추억이 되었습니다.</p>
        <p>다음 대회에서는 하프 마라톤에 도전할 계획입니다.</p>
      `,
        },
    ];

    // Add animation to stacked windows when year changes
    useEffect(() => {
        // Simple animation for stacked windows when year changes
        const stackedWindows = document.querySelectorAll('.window-stack');
        
        if (stackedWindows.length) {
            // Add animation class
            stackedWindows.forEach(window => {
                window.classList.add('animate-stack');
                
                // Remove animation class after animation completes
                setTimeout(() => {
                    window.classList.remove('animate-stack');
                }, 1500);
            });
        }
    }, [activeYear]);

    // Trigger star field animation on component mount
    useEffect(() => {
        setShowStarField(true);

        // Turn off star field after animation completes
        const timer = setTimeout(() => {
            setShowStarField(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // Calculate distance from current year (for perspective effect)
    const calculateDistance = (year) => {
        const index = years.indexOf(year);
        const activeIndex = years.indexOf(activeYear);
        return index - activeIndex;
    };

    // Set selected year and update handle position
    const setSelectedYear = (year) => {
        // Show star field during transitions
        setShowStarField(true);
        setActiveYear(year);
        updateHandlePosition(year);
        
        // Add pulse animation to the file window
        const fileWindow = document.querySelector('.file-system-window');
        if (fileWindow) {
            fileWindow.classList.add('year-changed');
            setTimeout(() => {
                fileWindow.classList.remove('year-changed');
            }, 800);
        }

        // Hide star field after transition completes
        setTimeout(() => {
            setShowStarField(false);
        }, 1000);
    };

    // Update handle position based on selected year
    const updateHandlePosition = (year) => {
        if (timelineRef.current && handleRef.current) {
            const yearIndex = years.indexOf(year);
            const totalYears = years.length;
            const scrollHeight = timelineRef.current.offsetHeight - 40; // Adjust for padding

            // Position handle (relative to timeline height)
            const position = (yearIndex / (totalYears - 1)) * scrollHeight + 20; // Add top padding
            handleRef.current.style.top = `${position}px`;
        }
    };
    
    // Handle mouse wheel scrolling for timeline navigation
    const handleWheel = (e) => {
        e.preventDefault();
        
        // Debounce wheel events to prevent too rapid scrolling
        if (timelineRef.current.getAttribute('data-scrolling') === 'true') {
            return;
        }
        
        // Set scrolling flag
        timelineRef.current.setAttribute('data-scrolling', 'true');
        
        // For natural scrolling: scrolling down (positive deltaY) = move forward in time (newer)
        // For natural scrolling: scrolling up (negative deltaY) = move backward in time (older)
        const direction = e.deltaY > 0 ? -1 : 1; // -1 to move to newer times (up in the list), 1 to move to older times (down in the list)
        
        const currentIndex = years.indexOf(activeYear);
        const nextIndex = Math.max(0, Math.min(years.length - 1, currentIndex + direction));
        
        if (nextIndex !== currentIndex) {
            // Show star field animation during time travel
            setShowStarField(true);
            setSelectedYear(years[nextIndex]);
            
            // Add focus to active year point
            document.querySelectorAll('.time-point').forEach(point => {
                point.classList.remove('active');
            });
            const activePoint = document.querySelector(`.time-point[data-year="${years[nextIndex]}"]`);
            if (activePoint) {
                activePoint.classList.add('active');
            }
            
            // Hide star field after a short delay
            setTimeout(() => {
                setShowStarField(false);
                // Clear scrolling flag after animation completes
                timelineRef.current.setAttribute('data-scrolling', 'false');
            }, 500); // Shorter animation for smoother scrolling
        } else {
            // Clear scrolling flag if no year change
            timelineRef.current.setAttribute('data-scrolling', 'false');
        }
    };

    // Handle timeline drag
    const startDrag = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setShowStarField(true);

        if (handleRef.current) {
            dragStartYRef.current = e.clientY;
            dragStartHandleTopRef.current = parseFloat(handleRef.current.style.top) || 0;
        }
    };

    const onDrag = (e) => {
        if (isDragging && timelineRef.current && handleRef.current) {
            const deltaY = e.clientY - dragStartYRef.current;
            const newTop = dragStartHandleTopRef.current + deltaY;
            const timelineRect = timelineRef.current.getBoundingClientRect();
            const minTop = 20; // Top padding
            const maxTop = timelineRect.height - 20 - handleRef.current.offsetHeight; // Bottom padding

            // Constrain to timeline bounds
            let constrainedTop = Math.max(minTop, Math.min(newTop, maxTop));

            // Set handle position
            handleRef.current.style.top = `${constrainedTop}px`;

            // Calculate which year to select based on position
            const relativePos = (constrainedTop - minTop) / (maxTop - minTop);
            const yearIndex = Math.round(relativePos * (years.length - 1));
            const year = years[Math.min(Math.max(0, yearIndex), years.length - 1)];

            // Only update if the year has changed
            if (year !== activeYear) {
                setActiveYear(year);
                // Show subtle star field during drag
                setShowStarField(true);
            }

            // Update year markers to reflect current position
            updateYearMarkers();
        }
    };

    const stopDrag = () => {
        setIsDragging(false);

        // Hide star field after dragging completes
        setTimeout(() => {
            setShowStarField(false);
        }, 500);
    };

    // Update visual appearance of year markers
    const updateYearMarkers = () => {
        document.querySelectorAll('.year-marker').forEach((marker) => {
            const year = parseInt(marker.getAttribute('data-year'));
            const distance = calculateDistance(year);
            marker.setAttribute('data-distance', distance);
        });
    };

    useEffect(() => {
        // Initialize handle position for the starting year
        updateHandlePosition(activeYear);

        // Update year markers initially
        updateYearMarkers();

        // Add event listeners for dragging and wheel scrolling
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDrag);
        
        // Add wheel event listener to the container
        if (containerRef.current) {
            containerRef.current.addEventListener('wheel', handleWheel, { passive: false });
        }
        
        // Initialize scrolling attribute for the timeline
        if (timelineRef.current) {
            timelineRef.current.setAttribute('data-scrolling', 'false');
        }

        return () => {
            document.removeEventListener('mousemove', onDrag);
            document.removeEventListener('mouseup', stopDrag);
            
            if (containerRef.current) {
                containerRef.current.removeEventListener('wheel', handleWheel);
            }
        };
    }, [activeYear, isDragging]);

    // Filter events by active year
    const filteredEvents = timelineData.filter(
        (event) => event.year === activeYear && (selectedCategory === null || event.category === selectedCategory)
    );
    
    // Get years that have events
    const yearsWithEvents = [...new Set(timelineData.map(event => event.year))];

    // Handle file click
    const openFile = (file) => {
        setSelectedFile(file);
    };

    // Handle category filter click
    const filterByCategory = (categoryId) => {
        setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    };

    // Close file modal
    const closeFileModal = () => {
        setSelectedFile(null);
    };

    return (
        <div className="timemachine-container" ref={containerRef}>
            {/* Star field animation for time travel effect */}
            <div className={`star-field ${showStarField ? 'active' : ''}`}></div>

            {/* Circular profile image */}
            <div className="profile-icon">
                <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="Profile" />
            </div>

            {/* Background image */}
            <div className="timemachine-background"></div>

            {/* Timeline (Mac Time Machine-like) */}
            <div className="mac-timeline">
                <div className="timeline-bar">
                    <div className="timeline-indicator" ref={timelineRef}>
                        {years.map((year) => (
                            <div
                                key={year}
                                className={`time-point ${year === activeYear ? 'active' : ''}`}
                                data-year={year}
                                style={{
                                    top: `${(years.indexOf(year) / (years.length - 1)) * 100}%`,
                                    transform: `scale(${year === activeYear ? 1.5 : 1})`,
                                }}
                                onClick={() => setSelectedYear(year)}
                            >
                                <span className="year-label">{year}</span>
                                {/* Marker for current year - 'Now' label */}
                                {year === years[0] && (
                                    <span className="now-label">Now</span>
                                )}
                            </div>
                        ))}
                        
                        {/* Handle for current position */}
                        <div 
                            className="timeline-handle" 
                            ref={handleRef}
                            onMouseDown={startDrag}
                        ></div>
                        
                        {/* Event markers (bars) to indicate time points with content */}
                        <div className="event-markers">
                            {years.map((year) => (
                                <div
                                    key={`marker-${year}`}
                                    className={`event-marker ${yearsWithEvents.includes(year) ? 'has-events' : ''}`}
                                    style={{
                                        top: `${(years.indexOf(year) / (years.length - 1)) * 100}%`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* File System Window */}
            <div className="file-system-window">
                <div className="window-header">
                    <div className="window-controls">
                        <span className="control close"></span>
                        <span className="control minimize"></span>
                        <span className="control maximize"></span>
                    </div>
                    <div className="window-title">
                        <span>Timeline Explorer - {activeYear}</span>
                        {activeYear === years[0] && <span className="current-badge">Now</span>}
                    </div>
                </div>
                <div className="window-content">
                    <div className="window-sidebar">
                        <div className="sidebar-title">CATEGORIES</div>
                        <ul className="category-list">
                            {categories.map((cat) => (
                                <li
                                    key={cat.id}
                                    className={`category ${selectedCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => filterByCategory(cat.id)}
                                >
                                    <span className={`category-dot ${cat.id}`}></span>
                                    {cat.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="files-container">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event) => (
                                <div key={event.id} className="file-item" onClick={() => openFile(event)}>
                                    <div className="file-icon">
                                        <i
                                            className={`fas fa-${categories.find((c) => c.id === event.category)?.icon || 'file'}`}
                                        ></i>
                                        <div className={`file-category-dot ${event.category}`}></div>
                                    </div>
                                    <div className="file-name">{event.title}</div>
                                    <div className="file-date">
                                        {new Date(event.date).toLocaleDateString('ko-KR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-files">
                                <i className="fas fa-folder-open"></i>
                                <p>No items found for {activeYear}</p>
                                {selectedCategory && (
                                    <p>Category: {categories.find((c) => c.id === selectedCategory)?.name}</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Stacked windows effect (similar to Time Machine) */}
            <div className="stacked-windows">
                <div className="window-stack window-stack-1"></div>
                <div className="window-stack window-stack-2"></div>
                <div className="window-stack window-stack-3"></div>
                <div className="window-stack window-stack-4"></div>
            </div>

            {/* Navigation buttons */}
            <div className="time-machine-controls">
                <button
                    className="control-button"
                    onClick={() => {
                        const currIndex = years.indexOf(activeYear);
                        if (currIndex > 0) {
                            setSelectedYear(years[currIndex - 1]);
                        }
                    }}
                >
                    <i className="fas fa-chevron-up"></i>
                </button>
                <button
                    className="control-button control-now"
                    onClick={() => {
                        // Go to the most recent year (Now)
                        setSelectedYear(years[0]);
                    }}
                >
                    <span>Now</span>
                </button>
                <button
                    className="control-button"
                    onClick={() => {
                        const currIndex = years.indexOf(activeYear);
                        if (currIndex < years.length - 1) {
                            setSelectedYear(years[currIndex + 1]);
                        }
                    }}
                >
                    <i className="fas fa-chevron-down"></i>
                </button>
            </div>

            {/* File Modal */}
            {selectedFile && (
                <div className="file-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{selectedFile.title}</h2>
                            <div className={`modal-category ${selectedFile.category}`}>
                                {categories.find((c) => c.id === selectedFile.category)?.name}
                            </div>
                            <span className="modal-close" onClick={closeFileModal}>
                                &times;
                            </span>
                        </div>
                        <div className="modal-body" dangerouslySetInnerHTML={{ __html: selectedFile.content }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TimeMachine;