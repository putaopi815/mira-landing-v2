"use client";

import { BrandLogo } from "./BrandLogo";
import { useLocaleContext } from "@/context/LocaleContext";
import { footerColumnKeys } from "@/i18n/content";

export function Footer() {
  const { m } = useLocaleContext();

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        padding: "3.5rem 0 2rem",
        borderTop: "1px solid var(--border-default)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--container-px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <div style={{ marginBottom: "0.75rem" }}>
              <BrandLogo iconPx={24} wordmarkSizePx={16.625} />
            </div>
            <p
              style={{
                fontSize: "0.8125rem",
                lineHeight: 1.5,
                color: "var(--text-tertiary)",
                maxWidth: "200px",
              }}
            >
              {m.footer.tagline}
            </p>
          </div>

          {footerColumnKeys.map((key) => (
            <div key={key}>
              <h4
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.875rem",
                }}
              >
                {m.footer.columnTitles[key]}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {m.footer.columns[key].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "color 0.15s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-secondary)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border-default)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--text-tertiary)",
            }}
          >
            {m.footer.copyright}
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            {m.footer.social.map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-tertiary)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-tertiary)")
                }
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
