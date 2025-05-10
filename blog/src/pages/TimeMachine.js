import React, { useState, useEffect, useRef } from 'react';
import '../styles/TimeMachine.css';

const TimeMachine = () => {
    // 시간 기간 데이터
    const timePeriods = [
        { name: '오늘 (현재)', date: '2025년 5월' },
        { name: '어제', date: '2025년 4월' },
        { name: '2024년 8월', date: '2024년 8월' },
        { name: '2024년 9월', date: '2024년 9월' },
        { name: '2023년', date: '2023년' },
        { name: '2022년', date: '2022년' },
    ];

    // 블로그 카테고리 데이터
    const categories = [
        {
            name: '개발',
            icon: '💻',
            posts: [
                {
                    id: 1,
                    title: 'React 컴포넌트 최적화 방법',
                    date: '2025-05-05',
                    image: '/images/react-optimization.jpg',
                    content:
                        'React 컴포넌트를 최적화하는 다양한 방법에 대해 알아봅니다. useMemo, useCallback, React.memo 등을 활용한 렌더링 최적화 기법을 소개합니다.',
                },
                {
                    id: 2,
                    title: 'NextJS 13 새로운 기능 살펴보기',
                    date: '2025-04-20',
                    image: '/images/nextjs-13.jpg',
                    content:
                        'NextJS 13의 새로운 기능과 개선사항에 대해 자세히 알아봅니다. 서버 컴포넌트, 향상된 라우팅 시스템 등 핵심 변경사항을 살펴봅니다.',
                },
                {
                    id: 3,
                    title: 'GraphQL과 Apollo 클라이언트 시작하기',
                    date: '2024-08-15',
                    image: '/images/graphql-apollo.jpg',
                    content:
                        'GraphQL의 기본 개념과 Apollo 클라이언트를 사용한 데이터 관리 방법에 대해 알아봅니다. REST API와 비교하며 장단점을 분석합니다.',
                },
                {
                    id: 4,
                    title: 'Typescript 고급 타입 활용법',
                    date: '2023-11-10',
                    image: '/images/typescript-advanced.jpg',
                    content:
                        'Typescript의 고급 타입 기능을 활용한 코드 안정성 확보 방법에 대해 다룹니다. 제네릭, 유틸리티 타입, 조건부 타입 등 실전 활용 사례를 소개합니다.',
                },
            ],
        },
        {
            name: '알고리즘',
            icon: '🧮',
            posts: [
                {
                    id: 5,
                    title: '동적 프로그래밍 기초',
                    date: '2025-05-02',
                    image: '/images/dynamic-programming.jpg',
                    content:
                        '동적 프로그래밍의 개념과 기본 문제 해결 패턴에 대해 알아봅니다. 메모이제이션과 타뷸레이션 방식의 차이점과 적용 사례를 소개합니다.',
                },
                {
                    id: 6,
                    title: '그래프 알고리즘의 실전 활용',
                    date: '2024-09-20',
                    image: '/images/graph-algorithms.jpg',
                    content:
                        '다익스트라, 벨만-포드, 플로이드-워셜 등 다양한 그래프 알고리즘의 실전 활용 사례와 구현 방법을 다룹니다.',
                },
                {
                    id: 7,
                    title: '이진 트리 순회 방법 비교',
                    date: '2023-07-15',
                    image: '/images/binary-tree.jpg',
                    content:
                        '이진 트리의 다양한 순회 방법(전위, 중위, 후위, 레벨 순회)과 각각의 활용 사례에 대해 알아봅니다.',
                },
            ],
        },
        {
            name: '데이터 과학',
            icon: '📊',
            posts: [
                {
                    id: 8,
                    title: '파이썬으로 시작하는 데이터 분석',
                    date: '2025-04-15',
                    image: '/images/python-data-analysis.jpg',
                    content: 'Pandas, NumPy, Matplotlib을 활용한 데이터 분석 기초와 실전 프로젝트를 소개합니다.',
                },
                {
                    id: 9,
                    title: '머신러닝 모델 평가 방법',
                    date: '2024-08-28',
                    image: '/images/ml-evaluation.jpg',
                    content: '머신러닝 모델의 다양한 평가 지표와 교차 검증, 과적합 방지 기법에 대해 알아봅니다.',
                },
                {
                    id: 10,
                    title: '텐서플로우 2.0 실전 가이드',
                    date: '2022-12-10',
                    image: '/images/tensorflow-guide.jpg',
                    content:
                        '텐서플로우 2.0의 주요 기능과 Keras API를 활용한 딥러닝 모델 구축 방법을 단계별로 설명합니다.',
                },
            ],
        },
        {
            name: '데브옵스',
            icon: '🛠️',
            posts: [
                {
                    id: 11,
                    title: 'Docker 컨테이너 최적화 기법',
                    date: '2025-05-01',
                    image: '/images/docker-optimization.jpg',
                    content:
                        'Docker 컨테이너의 크기를 줄이고 성능을 최적화하는 다양한 기법과 베스트 프랙티스를 소개합니다.',
                },
                {
                    id: 12,
                    title: 'Kubernetes 클러스터 모니터링',
                    date: '2024-09-05',
                    image: '/images/kubernetes-monitoring.jpg',
                    content:
                        'Prometheus와 Grafana를 활용한 Kubernetes 클러스터 모니터링 구축 방법과 알림 설정에 대해 다룹니다.',
                },
                {
                    id: 13,
                    title: 'CI/CD 파이프라인 자동화',
                    date: '2023-05-20',
                    image: '/images/cicd-pipeline.jpg',
                    content:
                        'GitHub Actions, Jenkins, GitLab CI 등을 활용한 CI/CD 파이프라인 구축과 자동화 방법을 비교 분석합니다.',
                },
                {
                    id: 14,
                    title: 'AWS 서버리스 아키텍처 설계',
                    date: '2022-08-15',
                    image: '/images/aws-serverless.jpg',
                    content:
                        'AWS Lambda, API Gateway, DynamoDB 등을 활용한 서버리스 애플리케이션 설계와 구현 방법에 대해 알아봅니다.',
                },
            ],
        },
        {
            name: '사이드 프로젝트',
            icon: '🚀',
            posts: [
                {
                    id: 15,
                    title: '주식 데이터 분석 대시보드 개발기',
                    date: '2025-04-10',
                    image: '/images/stock-dashboard.jpg',
                    content:
                        'React, D3.js, FastAPI를 활용한 실시간 주식 데이터 분석 대시보드 개발 과정과 기술 스택 선택 이유를 공유합니다.',
                },
                {
                    id: 16,
                    title: 'AI 기반 이미지 생성 웹앱 만들기',
                    date: '2024-08-10',
                    image: '/images/ai-image-generator.jpg',
                    content:
                        'Stable Diffusion API를 활용한 AI 이미지 생성 웹 애플리케이션 개발 과정과 배포 경험을 공유합니다.',
                },
                {
                    id: 17,
                    title: '블로그 플랫폼 마이그레이션 경험담',
                    date: '2023-03-15',
                    image: '/images/blog-migration.jpg',
                    content:
                        'WordPress에서 Gatsby로 블로그 플랫폼을 마이그레이션한 경험과 성능 개선 결과에 대해 이야기합니다.',
                },
            ],
        },
    ];

    // 상태 관리
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showPostInfo, setShowPostInfo] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const windowCount = timePeriods.length;
    const starsRef = useRef(null);

    // 게시물 필터링 함수
    useEffect(() => {
        // 현재 기간에 해당하는 게시물을 필터링
        const filterPostsByPeriod = () => {
            const currentPeriod = timePeriods[currentIndex];
            let startDate, endDate;

            // 기간별 필터링 날짜 설정
            switch (currentIndex) {
                case 0: // 오늘 (현재) - 현재 달
                    startDate = new Date('2025-05-01');
                    endDate = new Date('2025-05-31');
                    break;
                case 1: // 어제 - 이전 달
                    startDate = new Date('2025-04-01');
                    endDate = new Date('2025-04-30');
                    break;
                case 2: // 2024년 8월
                    startDate = new Date('2024-08-01');
                    endDate = new Date('2024-08-31');
                    break;
                case 3: // 2024년 9월
                    startDate = new Date('2024-09-01');
                    endDate = new Date('2024-09-30');
                    break;
                case 4: // 2023년
                    startDate = new Date('2023-01-01');
                    endDate = new Date('2023-12-31');
                    break;
                case 5: // 2022년
                    startDate = new Date('2022-01-01');
                    endDate = new Date('2022-12-31');
                    break;
                default:
                    startDate = new Date('2000-01-01');
                    endDate = new Date('2099-12-31');
            }

            // 모든 카테고리의 포스트를 결합하고 날짜로 필터링
            let allPosts = [];
            categories.forEach((category) => {
                category.posts.forEach((post) => {
                    const postDate = new Date(post.date);
                    if (postDate >= startDate && postDate <= endDate) {
                        allPosts.push({
                            ...post,
                            category: category.name,
                            categoryIcon: category.icon,
                        });
                    }
                });
            });

            // 활성 카테고리가 있으면 해당 카테고리만 필터링
            if (activeCategory) {
                allPosts = allPosts.filter((post) => post.category === activeCategory);
            }

            // 날짜순으로 정렬
            allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

            setFilteredPosts(allPosts);
        };

        filterPostsByPeriod();
    }, [currentIndex, activeCategory]);

    // 별 애니메이션 효과 생성
    useEffect(() => {
        if (starsRef.current) {
            const starsContainer = starsRef.current;
            starsContainer.innerHTML = '';

            // 100개의 별 생성
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';

                // 랜덤 위치 및 크기 설정
                const size = Math.random() * 3 + 1;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 2}s`;

                starsContainer.appendChild(star);
            }
        }
    }, []);

    // 카테고리 선택 핸들러
    const handleCategorySelect = (categoryName) => {
        if (activeCategory === categoryName) {
            setActiveCategory(null);
        } else {
            setActiveCategory(categoryName);
        }
    };

    // 포스트 선택 핸들러
    const handlePostSelect = (post) => {
        setSelectedPost(post);
        setShowPostInfo(true);
    };

    // 포스트 정보 닫기 핸들러
    const closePostInfo = () => {
        setShowPostInfo(false);
    };

    // 시간 여행 (인덱스 변경) 핸들러
    const timeTravel = (targetIndex) => {
        if (targetIndex >= 0 && targetIndex < windowCount) {
            setCurrentIndex(targetIndex);
        }
    };

    // 이전 기간으로 이동
    const goToPrevious = () => {
        if (currentIndex > 0) {
            timeTravel(currentIndex - 1);
        }
    };

    // 다음 기간으로 이동
    const goToNext = () => {
        if (currentIndex < windowCount - 1) {
            timeTravel(currentIndex + 1);
        }
    };

    // 현재 시간으로 복원
    const restoreToPresent = () => {
        timeTravel(0);
    };

    // 키보드 이벤트 처리
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (showPostInfo) {
                if (e.key === 'Escape') {
                    closePostInfo();
                }
            } else {
                if (e.key === 'ArrowLeft') {
                    goToPrevious();
                } else if (e.key === 'ArrowRight') {
                    goToNext();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex, showPostInfo]);

    // 마우스 휠 이벤트 처리
    useEffect(() => {
        const handleWheel = (e) => {
            if (!showPostInfo) {
                if (e.deltaY > 0) {
                    goToNext();
                } else {
                    goToPrevious();
                }
            }
        };

        // 디바운스 처리
        let wheelTimer;
        const debouncedHandleWheel = (e) => {
            clearTimeout(wheelTimer);
            wheelTimer = setTimeout(() => handleWheel(e), 100);
        };

        window.addEventListener('wheel', debouncedHandleWheel);
        return () => {
            window.removeEventListener('wheel', debouncedHandleWheel);
        };
    }, [currentIndex, showPostInfo]);

    // 윈도우 스택 생성
    const renderWindows = () => {
        return Array.from({ length: windowCount }).map((_, index) => {
            const windowClassName = `window stack-${index - currentIndex + 1}`;
            const isVisible = index - currentIndex >= 0 && index - currentIndex < 6;

            if (!isVisible) return null;

            return (
                <div key={index} className={windowClassName} data-index={index}>
                    <div className="window-header">
                        <div className="window-controls">
                            <div className="control red"></div>
                            <div className="control yellow"></div>
                            <div className="control green"></div>
                        </div>
                        <div className="address-bar">{timePeriods[index].date} 블로그 포스트</div>
                        <div className="view-controls">
                            <div className="view-control">☰</div>
                            <div className="view-control">⊞</div>
                            <div className="view-control">⊕</div>
                            <div className="view-control">🔍</div>
                        </div>
                    </div>
                    <div className="window-content">
                        <div className="sidebar">
                            <div className="sidebar-section">
                                <div className="sidebar-title">카테고리</div>
                                {categories.map((category) => (
                                    <div
                                        key={category.name}
                                        className={`sidebar-item ${activeCategory === category.name ? 'active' : ''}`}
                                        onClick={() => handleCategorySelect(category.name)}
                                    >
                                        <i>{category.icon}</i> {category.name}
                                    </div>
                                ))}
                            </div>
                            <div className="sidebar-section">
                                <div className="sidebar-title">정렬</div>
                                <div className="sidebar-item">
                                    <i>📅</i> 날짜순
                                </div>
                                <div className="sidebar-item">
                                    <i>🔤</i> 제목순
                                </div>
                            </div>
                            <div className="sidebar-section">
                                <div className="sidebar-title">뷰</div>
                                <div className="sidebar-item active">
                                    <i>📰</i> 그리드
                                </div>
                                <div className="sidebar-item">
                                    <i>📋</i> 리스트
                                </div>
                            </div>
                        </div>
                        <div className="posts">
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map((post) => (
                                    <div key={post.id} className="post" onClick={() => handlePostSelect(post)}>
                                        <div className="post-icon">
                                            <img src={post.image || '/images/default-post.jpg'} alt={post.title} />
                                        </div>
                                        <div className="post-title">{post.title}</div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ padding: '20px', color: '#666', width: '100%', textAlign: 'center' }}>
                                    <p>이 기간에 작성된 포스트가 없습니다.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="time-machine-container">
            {/* 별 애니메이션 배경 */}
            <div className="stars" ref={starsRef}></div>

            {/* 프로필 이미지 */}
            <img src="/profile.png" alt="Profile" className="profile-image" />

            {/* 윈도우 스택 */}
            <div className="window-stack">{renderWindows()}</div>

            {/* 타임라인 */}
            <div className="timeline">
                {timePeriods.map((period, index) => (
                    <div
                        key={index}
                        className={`time-indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => timeTravel(index)}
                    >
                        {period.name}
                    </div>
                ))}
            </div>

            {/* 제어 버튼 */}
            <div className="controls">
                <button className="button" onClick={goToPrevious}>
                    이전
                </button>
                <button className="button" id="restoreBtn" onClick={restoreToPresent}>
                    현재로
                </button>
                <button className="button" onClick={goToNext}>
                    다음
                </button>
            </div>

            {/* 포스트 정보 오버레이 */}
            <div
                className="info-overlay"
                style={{ opacity: showPostInfo ? 1 : 0, pointerEvents: showPostInfo ? 'auto' : 'none' }}
            >
                <div className="info-container">
                    <div className="info-header">
                        <h2>{selectedPost?.title}</h2>
                        <div className="info-close" onClick={closePostInfo}>
                            ×
                        </div>
                    </div>
                    {selectedPost && (
                        <div className="post-content">
                            <p style={{ color: '#666', marginBottom: '20px' }}>
                                <strong>작성일:</strong> {new Date(selectedPost.date).toLocaleDateString('ko-KR')} |
                                <strong> 카테고리:</strong> {selectedPost.categoryIcon} {selectedPost.category}
                            </p>
                            <img
                                src={selectedPost.image || '/images/default-post.jpg'}
                                alt={selectedPost.title}
                                style={{ maxWidth: '100%', borderRadius: '8px' }}
                            />
                            <div style={{ marginTop: '20px' }}>{selectedPost.content}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimeMachine;
