import { BreadcrumbPropsType } from "../types/breadcrumb.type";

export function Breadcrumb({ links }: BreadcrumbPropsType) {
  return (
    <section>
        <nav className="breadcrumb">
            {links.map((link, index) => (
              <>
                {index > 0 && <>&nbsp;&gt;&nbsp;</>}
                <a href={link.link}>
                  {link.label}
                </a>
              </>
              
            ))}
        </nav>
    </section>
  );
}
export default Breadcrumb;