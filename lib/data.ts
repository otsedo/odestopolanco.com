const API_USER_BY_EMAIL_END_POINT: string =
  process.env.API_USER_BY_EMAIL_END_POINT || "";
const AUTHENTICATION_SCOPE: string = process.env.AUTHENTICATION_SCOPE || "";
const AUTH_SERVER_URL: string = process.env.AUTHENTICATION_URL || "";
const AUTHENTICATION_GRANT_TYPE: string =
  process.env.AUTHENTICATION_GRANT_TYPE || "";

/**
 * Get information about the user
 * @param email email of the user
 * @param jwt jwt of the session
 * @returns response from the API
 */
export async function getUserData(email: String, jwt: string) {
  try {
    const response = await fetch(`${API_USER_BY_EMAIL_END_POINT}${email}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch the user data.");
  }
}

/**
 * Get a new JWT from se authorization server
 * @param credentials client and secret
 * @returns a json object with the JWT
 */
export async function getJwt(credentials: string) {
  try {
    const response = await fetch(AUTH_SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
      body: new URLSearchParams({
        grant_type: AUTHENTICATION_GRANT_TYPE,
        scope: AUTHENTICATION_SCOPE,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch the JWT.");
  }
}

export const links = [
  { name: "Home", href: "/", protected: false },
  { name: "Blog", href: "/blog", protected: false },
  { name: "Skills", href: "#skills", protected: false },
  { name: "Acerca de mi", href: "/acerca-de-mi", protected: false },
  { name: "Contacto", href: "/contacto", protected: false },
];

export const skillsArray = [
  {
    name: "Git",
    icon: "/assets/img/logos/git.png",
  },
  {
    name: "GitHub",
    icon: "/assets/img/logos/github.png",
  },
  {
    name: "Bamboo",
    icon: "/assets/img/logos/bamboo.png",
  },
  {
    name: "SonarQube",
    icon: "/assets/img/logos/sonarqube.png",
  },
  {
    name: "Nexus Sonatype",
    icon: "/assets/img/logos/nexus.png",
  },
  {
    name: "Docker",
    icon: "/assets/img/logos/docker.png",
  },
  {
    name: "Traefik",
    icon: "/assets/img/logos/traefik.png",
  },
  {
    name: "Java",
    icon: "/assets/img/logos/java.png",
  },
  {
    name: "Spring Framework",
    icon: "/assets/img/logos/spring.png",
  },
  {
    name: "HTML",
    icon: "/assets/img/logos/html.png",
  },
  {
    name: "CSS",
    icon: "/assets/img/logos/css.png",
  },
  {
    name: "Javascript",
    icon: "/assets/img/logos/javascript.png",
  },
  {
    name: "React",
    icon: "/assets/img/logos/react.png",
  },
  {
    name: "IBM MQ 9.2",
    icon: "/assets/img/logos/mq.png",
  },
  {
    name: "IBM ACE 12",
    icon: "/assets/img/logos/appconnect.png",
  },
  {
    name: "JUnit + Mockito",
    icon: "/assets/img/logos/junit.png",
  },
  {
    name: "IBMi AS400",
    icon: "/assets/img/logos/as400.png",
  },
  {
    name: "MySQL",
    icon: "/assets/img/logos/mysql.png",
  },
  {
    name: "SQLServer",
    icon: "/assets/img/logos/mssql.png",
  },
  {
    name: "Posgresql",
    icon: "/assets/img/logos/posgresql.png",
  },
  {
    name: "Wordpress",
    icon: "/assets/img/logos/wordpress.png",
  },
  {
    name: "Adobe Premiere",
    icon: "/assets/img/logos/premiere.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/img/logos/tailwind.png",
  },
];
