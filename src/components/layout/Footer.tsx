import assetsSizeWithDiff from './assetsSize.json';

const Footer = () => {
    const { sizes, commitHash, diff } = assetsSizeWithDiff;
    return (
        <footer>
            <p>Commit: {commitHash}</p>
            <p>
                HTML: {sizes.html} KB (Diff: {diff.html.toFixed(2)}%)
            </p>
            <p>
                CSS: {sizes.css} KB (Diff: {diff.css.toFixed(2)}%)
            </p>
            <p>
                JS: {sizes.js} KB (Diff: {diff.js.toFixed(2)}%)
            </p>
        </footer>
    );
};

export default Footer;
