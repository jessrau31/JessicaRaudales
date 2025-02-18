export const aboutMeSections = [
    {
      id: 1,
      title: "🚀 Entusiasta del Frontend y las Bases de Datos",
      description:
        "Especialista en transformar ideas en soluciones digitales funcionales. En mis proyectos académicos he creado interfaces centradas en la usabilidad y sistemas de datos optimizados para eficiencia.",
      bgColorHover: "hover:bg-[#F29CB7]/10",
      padding: "p-3 md:p-4",
      rounded: "rounded-xl",
    },
    {
      id: 2,
      title: "💡 Mi filosofía de código",
      description:
        "Cada línea es un puzzle por resolver - busco soluciones técnicas con enfoque creativo. Mi motivación: ver cómo cada ajuste acerca el proyecto a su versión ideal.",
      bgColorHover: "hover:bg-[#FBCF4F]/10",
      padding: "p-3 md:p-4",
      rounded: "rounded-xl",
    },
    {
      id: 3,
      title: "🧩 Fuera del código",
      description: "Armando rompecabezas de miles de piezas",
      additional:
        "(Donde practico paciencia y visión global - habilidades que aplico en cada proyecto)",
      bgColorHover: "hover:bg-[#DDAAFF]/10",
      padding: "p-3 md:p-4",
      rounded: "rounded-xl",
    },
  ];

  export const technologiesData = [
    {
      groupTitle: "Desarrollo Frontend",
      groupIcon: {
        type: "material",
        name: "devices",
        classes:
          "material-symbols-outlined text-2xl md:text-3xl transition-transform hover:rotate-12",
      },
      skills: [
        {
          id: 1,
          name: "React",
          iconClass:
            "devicon-react-original text-xl md:text-2xl transition-colors group-hover:text-[#61DAFB] text-[#FBCF4F]",
          percentage: "70%",
          progress: {
            base: "bg-[#FBCF4F]",
            hoverGradient:
              "group-hover:bg-gradient-to-r from-[#FBCF4F] to-[#F29CB7]",
            width: "w-2/3",
            hoverWidth: "group-hover:w-3/4",
          },
          textColor: "text-[#FBCF4F]",
          hoverTextColor: "group-hover:text-[#FBCF4F]",
        },
        {
          id: 2,
          name: "HTML",
          iconClass:
            "devicon-html5-plain text-xl md:text-2xl transition-colors group-hover:text-[#E44D26] text-[#522A6F]",
          percentage: "80%",
          progress: {
            base: "bg-[#522A6F]",
            hoverGradient:
              "group-hover:bg-gradient-to-r from-[#522A6F] to-[#DDAAFF]",
            width: "w-2/3",
            hoverWidth: "group-hover:w-3/4",
          },
          textColor: "text-[#522A6F]",
          hoverTextColor: "group-hover:text-[#522A6F]",
        },
        {
          id: 3,
          name: "CSS",
          iconClass:
            "devicon-css3-plain text-xl md:text-2xl transition-colors group-hover:text-[#1572B6] text-[#DDAAFF]",
          percentage: "80%",
          progress: {
            base: "bg-[#DDAAFF]",
            hoverGradient:
              "group-hover:bg-gradient-to-r from-[#DDAAFF] to-[#F29CB7]",
            width: "w-2/3",
            hoverWidth: "group-hover:w-3/4",
          },
          textColor: "text-[#DDAAFF]",
          hoverTextColor: "group-hover:text-[#DDAAFF]",
        },
        {
          id: 4,
          name: "JavaScript",
          iconClass:
            "devicon-javascript-plain text-xl md:text-2xl transition-colors group-hover:text-[#F7DF1E] text-[#F29CB7]",
          percentage: "70%",
          progress: {
            base: "bg-[#F29CB7]",
            hoverGradient:
              "group-hover:bg-gradient-to-r from-[#F29CB7] to-[#FBCF4F]",
            width: "w-2/3",
            hoverWidth: "group-hover:w-3/4",
          },
          textColor: "text-[#F29CB7]",
          hoverTextColor: "group-hover:text-[#F29CB7]",
        },
      ],
    },
    {
      groupTitle: "Motores de BD",
      groupIcon: {
        type: "devicon",
        classes:
          "devicon-azuresqldatabase-plain text-2xl md:text-3xl transition-transform hover:scale-110",
      },
      skills: [
        {
          id: 1,
          name: "SQL Server",
          iconClass:
            "devicon-microsoftsqlserver-plain text-xl md:text-2xl transition-colors group-hover:text-[#A91E22] text-[#FBCF4F]",
          percentage: "80%",
          progress: {
            base: "bg-[#FBCF4F]",
            hoverGradient:
              "group-hover:bg-gradient-to-r from-[#FBCF4F] to-[#F29CB7]",
            width: "w-2/3",
            hoverWidth: "group-hover:w-3/4",
          },
          textColor: "text-[#FBCF4F]",
          hoverTextColor: "group-hover:text-[#FBCF4F]",
        },
        {
          id: 2,
          name: "Oracle",
          iconClass:
            "devicon-oracle-original text-xl md:text-2xl transition-colors group-hover:text-[#FF0000] text-[#522A6F]",
          percentage: "80%",
          progress: {
            base: "bg-[#522A6F]",
            hoverGradient:
              "group-hover:bg-gradient-to-r from-[#522A6F] to-[#DDAAFF]",
            width: "w-2/3",
            hoverWidth: "group-hover:w-3/4",
          },
          textColor: "text-[#522A6F]",
          hoverTextColor: "group-hover:text-[#522A6F]",
        },
        {
          id: 3,
          name: "MySQL",
          iconClass:
            "devicon-mysql-original text-xl md:text-2xl transition-colors group-hover:text-[#00758F] text-[#DDAAFF]",
          percentage: "70%",
          progress: {
            base: "bg-[#DDAAFF]",
            hoverGradient:
              "group-hover:bg-gradient-to-r from-[#DDAAFF] to-[#F29CB7]",
            width: "w-2/3",
            hoverWidth: "group-hover:w-3/4",
          },
          textColor: "text-[#DDAAFF]",
          hoverTextColor: "group-hover:text-[#DDAAFF]",
        },
      ],
    },
    {
      groupTitle: "Backend",
      groupIcon: {
        type: "material",
        name: "tv_options_input_settings",
        classes:
          "material-symbols-outlined text-2xl md:text-3xl transition-transform hover:rotate-12",
      },
      skills: [
        {
          id: 1,
          name: "Python",
          iconClass:
            "devicon-python-plain text-xl md:text-2xl transition-colors group-hover:text-[#3776AB] text-[#F29CB7]",
          percentage: "40%",
          progress: {
            base: "bg-[#F29CB7]",
            hoverGradient:
              "group-hover:bg-gradient-to-r from-[#F29CB7] to-[#FBCF4F]",
            width: "w-1/3",
            hoverWidth: "group-hover:w-1/2",
          },
          textColor: "text-[#F29CB7]",
          hoverTextColor: "group-hover:text-[#F29CB7]",
        },
        {
          id: 2,
          name: "C#",
          iconClass:
            "devicon-csharp-plain text-xl md:text-2xl transition-colors group-hover:text-[#239120] text-[#522A6F]",
          percentage: "35%",
          progress: {
            base: "bg-[#522A6F]",
            hoverGradient:
              "group-hover:bg-gradient-to-r from-[#522A6F] to-[#DDAAFF]",
            width: "w-1/3",
            hoverWidth: "group-hover:w-1/2",
          },
          textColor: "text-[#522A6F]",
          hoverTextColor: "group-hover:text-[#522A6F]",
        },
        {
          id: 3,
          name: "Spring Boot",
          iconClass:
            "devicon-spring-original text-xl md:text-2xl transition-colors group-hover:text-[#6DB33F] text-[#DDAAFF]",
          percentage: "30%",
          progress: {
            base: "bg-[#DDAAFF]",
            hoverGradient:
              "group-hover:bg-gradient-to-r from-[#DDAAFF] to-[#F29CB7]",
            width: "w-1/3",
            hoverWidth: "group-hover:w-1/2",
          },
          textColor: "text-[#DDAAFF]",
          hoverTextColor: "group-hover:text-[#DDAAFF]",
        },
      ],
    },
  ];

export const footerData = {
    title: "¿Creamos algo juntos? ¡Hablemos! ✨",
    contacts: [
      {
        platform: "GitHub",
        url: "https://github.com/jessrau31",
        icon: "fa-brands fa-github",
        displayText: "GitHub/jessrau31",
        hoverColor: "hover:text-[#FBCF4F]",
      },
      {
        platform: "Email",
        url: "mailto:jessica.raudales31@gmail.com",
        icon: "fa-regular fa-envelope",
        displayText: "Email",
        hoverColor: "hover:text-[#F29CB7]",
      },
      {
        platform: "LinkedIn",
        url: "http://www.linkedin.com/in/jessica-hernández-raudales-814a99275",
        icon: "fa-brands fa-linkedin",
        displayText: "LinkedIn",
        hoverColor: "hover:text-[#FAEADD]",
      },
    ],
    copyright:
      "© 2025 Jessica Raudales. Hecho con <i class='fa-solid fa-heart text-[#522A6F]'></i> en Honduras",
  };
  