# NodeJS common patterns implementation
- Strategy
- Observer
- Decorator
- Command

# Принципы:
- Инкапсулировать то, что изменяется
- ~~Предпочитать композицию наследованию~~
- ~~Программировать на уровне интерфейсов~~
- Стремиться к слабой связанности взаимодействующих объектов
- Классы должны быть открыты для расширения, закрыты для изменения
- Код должен зависеть от абстракций, а не от конкретных классов
- Внешний интерфейс должен предоставлять минимальное количество информации
 
 # Описание паттернов
 ### Шаблонный метод
 Определяет "скелет" алгоритма в методе, оставляя определение реализации некоторых шагов субклассам.
 Субклассы могут переопределять некоторые части алгоритма без изменения структуры.
 ### Фасад
 Предоставляет унифицированный интерфейс к группе интерфейсов подсистемы.
 Фасад определяет высокоусровневый интерфейс, упрощающий работу с подсистемой.
 ### Адаптер
 Преобразует интерфейс класса к другому интерфейсу, на который рассчитан клиент.
 Адаптер обеспечивает совместную работу классов, невозможную в обычных условиях
 из-за несовместимости интерфейсов.
 ### Команда
 Инкапсулирует запрос в виде объекта, делая возможной параметризацию
 клиентских объектов с другими запросами, организацию очереди или регистрацию
 запросов, а также поддержку отмены операций.