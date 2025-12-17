import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="w-full lg:w-[1000px] px-4 py-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="bbh-bartle-regular text-sm font-semibold text-neutral-100">
              Learning Hub
            </h3>
            <p className="mt-4 text-sm text-neutral-400">
              Create and explore courses built from curated links across the
              web.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-200">Product</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/create-course"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Create Course
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Explore Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-200">
              Resources
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/docs"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-200">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800 pt-8">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Learning Hub. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs">
            <Link
              to="/privacy"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
