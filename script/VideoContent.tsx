export const IntroTitle = "Checking" ;
export const IntroCaption = "30/1/23" ;
export const Introduction = "Welcome to bridge course" ;
export const ScrollTextTitle = "Here's all the stuff added!" ;
export const BackgroundMusic = "https://audiocdn.epidemicsound.com/ES_ITUNES/Zy0ALC_Ganja/ES_Ganja.mp3" ;
export const Conclusion = "Conclusion" ;
export const ConclusionCaption = "conclusion" ;
export const EndingTitle = "Enhance42" ;
export const EndingCaption = "The end" ;

const Content = `
topChanges:
- title: Open bridge.e42.dev
  description: Reduced overhead for trace span relationships
- title: Deprecate custom_ecmascript_transforms
  description: Removed support for custom ECMAScript transforms
- title: Updated Image preload behavior
  description: Fixed behavior related to setting image preload and referrer policy

allChanges:
- Optimize trace span relationships
- Deprecate custom_ecmascript_transforms
- Remove old-space-size filtering from dev server
- Rework client router filter handling
- Updated Image preload behavior
- Fix cookies().set missing in types
- Disable ;tracing/release_max_level_off; for wasm, too
- Apply user-defined PostCSS transforms to foreign code
- Add @swc/core to server external packages
- ;turbo-binding; -> ;turbopack-binding;
- Consolidate react_refresh options
- Add support for globally providing mdx components to turbopack
- Refactor pages structure
- Fix conflict when re-exporting multiple Client References
- Move transforms to plugin
- Fix chained ;.bind; of Server Actions
- Fix port value for metadataBase
- Introduce NextMode
- Port sorted-routes.ts to Rust
- Move build workers count change behind flag
- Update default for appDocumentPreloading config for minimalMode
- Add @vercel/og to external server packages
- Fix custom server React resolution with app dir and pages both presented
- Error in ;next export; when ;serverActions; is enabled
- Reset not-found and error boundary when navigating
- Revert "Error in ;next export; when ;serverActions; is enabled"
- Warning fetch for ;[object Request]; specified
- Remove custom handling for prebundled react env
- Set cookies followed by ;redirect();
- Update examples to use draft mode
- Add mdx page example to examples/app-dir-mdx
- Update with-supertokens example
- Update with-clerk example to app router
- Upgrading react-ga to react-ga4
- Update with-turbopack example
- Add trace-to-jaeger to workspace
- Apply fmt
- Fix clippy errors
- Update ;swc_core; to ;v0.76.6;
- Fix going back to page after applying hash link
- Update turbopack
- Suggest a replay in the bug issue template
- Credits` ;

export default Content ;
