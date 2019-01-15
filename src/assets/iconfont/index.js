let requireAll = requireContext => requireContext.keys().map(requireContext)
let req = require.context('./css', false, /\.css/)
requireAll(req)
