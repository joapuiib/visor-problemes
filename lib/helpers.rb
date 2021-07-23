module Helpers
  def markdown(text=nil)
    text ||= yield
    # return Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, tables: true).render(text)
  end

  def load_problems(name=nil, folder=nil)
    name ||= "problemes"
    folder ||= data.problemes

    if !folder.is_a?(Hash)
      return {}
    elsif folder.key?("name")
      return {"#{name}": folder}
    else
      problems = {}
      folder.each do |key, obj|
        load_problems(key, obj).each do |problem_key, problem_obj|
          problems["#{name}/#{problem_key}"] = problem_obj
        end
      end
      return problems
    end
  end
end
