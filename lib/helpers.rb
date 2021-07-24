module Helpers
  def selectProblem(name)
    problems = config.problems
    return problems.find {|key, obj| obj.name == name}[1]
  end
end
