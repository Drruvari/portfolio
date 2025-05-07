import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

const imageMap = {
  ecom: 'https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?w=500&auto=format&fit=crop&q=60',
  saas: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=500&auto=format&fit=crop&q=60',
  marketing: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&auto=format&fit=crop&q=60',
  cms: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?w=500&auto=format&fit=crop&q=60',
  landing: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60',
  analytics: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&auto=format&fit=crop&q=60',
  api: 'https://images.unsplash.com/photo-1717691449368-ecb097f1f407?w=500&auto=format&fit=crop&q=60',
  mobile: 'https://images.unsplash.com/photo-1667984390527-850f63192709?w=500&auto=format&fit=crop&q=60',
  crm: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60'
};

const ProjectBox = ({ code, title, year }) => {
  const src = imageMap[code] || imageMap['landing'];
  const liRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = liRef.current;
    const img = imgRef.current;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`;
    };

    const onLeave = () => {
      img.style.transform = 'translate(0, 0) scale(1)';
      el.style.boxShadow = 'none';
    };

    const onEnter = () => {
      el.style.boxShadow = '0 15px 25px rgba(0,0,0,0.2)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mouseenter', onEnter);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <li
      ref={liRef}
      data-color={code}
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <p className="img" style={{ overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src={src}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
        />
      </p>
      <h4 style={{ padding: '10px 0' }}>
        <span className="a">{title}</span>{' '}
        <span className="b" style={{ opacity: 0.5 }}>{year}</span>
      </h4>
    </li>
  );
};

ProjectBox.propTypes = {
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default ProjectBox;
